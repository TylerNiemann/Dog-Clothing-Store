import { getFirestore, doc, getDoc, setDoc, updateDoc, onSnapshot, arrayRemove } from "firebase/firestore";

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

export const addCartItem = async (userId, newItem, quantity) => {
  const cart = await getUserCart(userId);
  const existingItem = cart.find((product) => product.itemName === newItem.itemName);
  if (existingItem) {
    existingItem.qty += quantity;
  } 
  else {
    const { description, ...itemWithoutDescription } = newItem;
    if(quantity >= 1){
      itemWithoutDescription.qty = quantity
      cart.push(itemWithoutDescription);
    } 
  }
  
  await updateCartItem(userId, cart);
};

export const deleteCartItem = async (userId, removeItem) => {
  const userCartRef = getUserCartRef(userId);
  await updateDoc(userCartRef, {
    cart: arrayRemove(removeItem)
  });
};

export const removeCartItem = async (userId, removeItem) => {
  const cart = await getUserCart(userId);
  const updatedCart = cart.map((item) => {
      if (item.id === removeItem.id && item.qty > 1) {
        return { ...item, qty: item.qty - 1 };
      }
      return item;
  })
  if (removeItem.qty === 1) {
    await deleteCartItem(userId, removeItem);
  } else {
    await updateCartItem(userId, updatedCart);
  }
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