import { setDoc, getFirestore, doc } from "firebase/firestore";
import { 
  getUserCartRef,
  getUserCart,
  addCartItem,
  deleteCartItem,
  removeCartItem,
  setUserCart,
   } from "../components/utils/firestoreUtils";
import initial from "../Firebase";
import { assert } from "chai";

const db = getFirestore();

describe('Firestore emulator cart integration tests', () => {

  it('test_returns_correct_reference', () => {
    const userId = 'testUserId';
    const actualRef = getUserCartRef(userId);
    assert.isDefined(actualRef)
  });

  it('test_returns_correct_cart', async () => {
    const userId = 'testUserId';
    const actualCart = await getUserCart(userId);
    assert.isDefined(actualCart)
  });

  it('test_adds_to_cart', async () => {
    const userId = 'testUserId';
    const newItem = {
      itemName: 'Woof Hoodie',
      price: 49.99,
      qty: 1,
      id: 'woof-hoodie',
    };
    const quantity = 1
    await setDoc(doc(db, 'carts', userId), { cart: [] });
    await addCartItem(userId, newItem, quantity);
    const actualCart  = await getUserCart(userId)
    assert.deepInclude(actualCart, newItem, 'Item not found in cart');
  });

  it('test_removes_from_cart', async () => {
    const userId = 'testUserId';
    const newItem = {
      itemName: 'Woof Hoodie',
      price: 49.99,
      qty: 1,
      id: 'woof-hoodie',
    };
    await deleteCartItem(userId, newItem);
    const actualCart  = await getUserCart(userId)
    assert.deepStrictEqual(actualCart, [], 'Item not removed');
  });

  it('test_adds_multiple_qty_to_cart', async () => {
    const userId = 'testUserId';
    const newItem = {
      itemName: 'Woof Hoodie',
      price: 49.99,
      qty: 1,
      id: 'woof-hoodie',
    };
    const quantity = 2
    await addCartItem(userId, newItem, quantity);
    newItem.qty = 2
    const actualCart  = await getUserCart(userId)
    assert.deepInclude(actualCart, newItem, 'Item not found in cart');
  });

  it('test_lower_quantity_from_cart', async () => {
    const userId = 'testUserId';
    const newItem = {
      itemName: 'Woof Hoodie',
      price: 49.99,
      qty: 2,
      id: 'woof-hoodie',
    };
    await removeCartItem(userId, newItem);
    newItem.qty = 1
    const actualCart  = await getUserCart(userId)
    assert.deepInclude(actualCart, newItem, 'Item qty not lowered');
  });

  it('test_adds_multiple_item_to_cart', async () => {
    const userId = 'testUserId';
    const newItem = {
      itemName: 'Beige T-Shirt',
      price: 25.99,
      qty: 1,
      id: 'beige-t-shirt',
    };
    const quantity = 1
    await addCartItem(userId, newItem, quantity);
    const oldItem = 
    {
      itemName: 'Woof Hoodie',
      price: 49.99,
      qty: 1,
      id: 'woof-hoodie',
    };
    const actualCart  = await getUserCart(userId)
    assert.deepInclude(actualCart, newItem, 'NewItem not found in cart');
    assert.deepInclude(actualCart, oldItem, 'OldItem not found in cart');
  });

  it('test_empties_cart', async () => {
    const userId = 'testUserId';
    await setUserCart(userId, []);
    const actualCart  = await getUserCart(userId);
    assert.deepStrictEqual(actualCart, [], 'Items not removed');
  });

});
