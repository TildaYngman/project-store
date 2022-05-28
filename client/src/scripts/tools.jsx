export function addItemToCart(item, cartItems, setCartItems) {
  console.log(cartItems);
  if (currentUser.isLoggedIn) {
    const newArray = [...cartItems];
    let itemExists = false;

    for (let product of newArray) {
      if (product.name === item.name) {
        itemExists = true;
        product.quantity++;
      }
    }

    if (!itemExists) {
      newArray.push({
        image: item.image,
        name: item.name,
        quantity: 1,
        price: item.price,
      });
    }
  }
}
