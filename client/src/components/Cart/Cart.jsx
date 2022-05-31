import { addItemToCart, removeItemFromCart } from "../../scripts/tools";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

function Cart({ cartItems, setCartItems }) {
  const totalPrice = cartItems.reduce(
    (sum, item) => item.price * item.quantity + sum,
    0
  );

  return (
    <section id="cart-container" className="hidden">
      <div className="cart-content">
        <h1>Your shopping cart!</h1>
        <div>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                className="cart-content__info-container"
                key={`cartItems${item.title}`}
              >
                <img
                  className="cart-content__img"
                  src={item.image}
                  alt={item.title}
                />
                <h3 className="cart-content__info">
                  {item.title}
                  {item.quantity}
                </h3>

                <div className="cart-content__btns-container">
                  <button
                    className="cart-content__btn"
                    onClick={() => {
                      removeItemFromCart(item, cartItems, setCartItems);
                    }}
                  >
                    <AiFillMinusCircle size={20} />
                  </button>
                  <p>{item.quantity}</p>
                  <button
                    className="cart-content__btn"
                    onClick={() => {
                      addItemToCart(item, cartItems, setCartItems);
                    }}
                  >
                    <AiFillPlusCircle size={20} />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <h2>Oops! You need to add some Items to your cart!</h2>
          )}
        </div>
        <div className="text-center my-6">Total: {totalPrice}SEK</div>
      </div>
    </section>
  );
}

export default Cart;
