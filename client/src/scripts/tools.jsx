export function addItemToCart(item, cartItems, setCartItems) {
  const newArray = [...cartItems];
  let itemExists = false;

  for (let product of newArray) {
    if (product.title === item.title) {
      itemExists = true;
      product.quantity++;
    }
  }

  if (!itemExists) {
    newArray.push({
      image: item.image,
      title: item.title,
      quantity: 1,
      price: item.price,
    });
  }
  setCartItems(newArray);
  console.log(cartItems);
}

export function removeItemFromCart(item, cartItems, setCartItems) {
  const newArray = [...cartItems];

  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i].title === item.title) {
      newArray[i].quantity--;
    }
    if (newArray[i].quantity === 0) {
      newArray.splice(i, 1);
    }
  }

  setCartItems(newArray);
}
