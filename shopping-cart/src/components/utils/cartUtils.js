export const calculateTotal = (cart) => {
    return cart.reduce((prev, curr) => prev + (curr.qty * curr.price), 0);
  };
  
  export const calculateLength = (cart) => {
    return cart.reduce((prev, curr) => prev + curr.qty, 0);
  };