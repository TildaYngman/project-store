function Cart({ cartItems, setCartItems }) {
  const totalPrice = cartItems.reduce(
    (sum, obj) => obj.price * obj.quantity + sum,
    0
  );

  return (
    <section id="cart-container" className="hidden">
      <div className="full-overlay">
        <h1>Your shopping cart!</h1>
      </div>
    </section>
  );
}

// const cartContent = () => {
//   const { onAdd, items } = props;
//   return (
//     <div className="grid-item">
//       <img
//         className="grid-item__image"
//         src={props.image}
//         alt="A pricture of the product"
//       />
//       <h3 className="grid-item__info">
//         {props.title ? props.title : "Coming soon"}
//       </h3>
//       <p className="grid-item__info">{props.price ? props.price : ""} SEK</p>
//       <div className="grid-item__btn-container"></div>
//     </div>
//   );
// };

export default Cart;
