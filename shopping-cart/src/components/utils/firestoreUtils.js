import { getFirestore, doc, getDoc, setDoc, updateDoc, onSnapshot } from "firebase/firestore";

export const getUserCartRef = (userId) => {
  const db = getFirestore();
  return doc(db, "carts", userId);
};

export const getUserCart = async (userId) => {
  const userCartRef = getUserCartRef(userId);
  const docSnapshot = await getDoc(userCartRef);
  return docSnapshot.exists() ? docSnapshot.data().cart : [];
};

export const setUserCart = async (userId, cart) => {
  const userCartRef = getUserCartRef(userId);
  await setDoc(userCartRef, { cart });
};

export const updateCartItem = async (userId, updatedCart) => {
  const userCartRef = getUserCartRef(userId);
  await updateDoc(userCartRef, { cart: updatedCart });
};

export const addCartItem = async (userId, newItem) => {
  const cart = await getUserCart(userId);
  const existingItem = cart.find((product) => product.itemName === newItem.itemName);
  
  if (existingItem) {
    existingItem.qty += 1;
  } else {
    cart.push(newItem);
  }
  
  await updateCartItem(userId, cart);
};

export const removeCartItem = async (userId, itemName) => {
  const cart = await getUserCart(userId);
  const updatedCart = cart.filter((item) => item.itemName !== itemName);
  await updateCartItem(userId, updatedCart);
};

export const onCartSnapshot = (userId, callback) => {
    const userCartRef = getUserCartRef(userId);
    return onSnapshot(userCartRef, (docSnapshot) => {
      if (docSnapshot.exists()) {
        const cart = docSnapshot.data().cart;
        callback(cart);
      }
    });
  };