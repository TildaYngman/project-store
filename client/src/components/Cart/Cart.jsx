import { addItemToCart, removeItemFromCart } from "../../scripts/tools";

function Cart({ cartItems, setCartItems }) {
  const totalPrice = cartItems.reduce(
    (sum, item) => item.price * item.quantity + sum,
    0
  );

  return (
    <section id="cart-container" className="hidden">
      <div className="full-overlay">
        <h1>Your shopping cart!</h1>
        <div>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div>
                <h3 className="grid-item__info">
                  {item.title}
                  {item.quantity}
                </h3>

                <button
                  onClick={() => {
                    removeItemFromCart(item, cartItems, setCartItems);
                  }}
                >
                  -
                </button>
                <p>{item.quantity}</p>
                <button
                  onClick={() => {
                    addItemToCart(item, cartItems, setCartItems);
                  }}
                >
                  +
                </button>

                <div className="text-center my-6">Total: {totalPrice}SEK</div>
              </div>
            ))
          ) : (
            <h2>Oops! You need to add some Items to your cart!</h2>
          )}
        </div>
      </div>
    </section>
  );
}

export default Cart;
