// Adds items or increases the count of items in cart, incresing occurs if same object with same attributes exists
export const addItemToCart = (cartItems, newItem) => {
  const existingCartItem = cartItems.find((cartItem) =>
    compareObjects(cartItem.item, newItem)
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      compareObjects(cartItem.item, newItem)
        ? { item: cartItem.item, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  } else {
    return [...cartItems, { item: newItem, quantity: 1 }];
  }
};

// Decreases item count of cartItem or removes the item if count drops below 1
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find((cartItem) =>
    compareObjects(cartItem.item, cartItemToRemove)
  );

  let newCartItems = cartItems.map((cartItem) =>
    compareObjects(cartItem.item, cartItemToRemove)
      ? { item: cartItem.item, quantity: cartItem.quantity - 1 }
      : cartItem
  );

  return newCartItems.filter((cartItem) => cartItem.quantity > 0);
};

// Utility function to compare two objects
function compareObjects(o1, o2) {
  for (var p in o1) {
    if (p != "prices") {
      if (o1.hasOwnProperty(p)) {
        if (o1[p] !== o2[p]) {
          return false;
        }
      }
    }
  }

  return true;
}
