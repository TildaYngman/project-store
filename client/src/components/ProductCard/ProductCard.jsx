import { HiShoppingCart } from "react-icons/hi";
import { addItemToCart, removeItemFromCart } from "../../scripts/tools";

const ProductCard = ({ item, cartItems, setCartItems }) => {
  return (
    <div className="grid-item">
      <img
        className="grid-item__image"
        src={item.image}
        alt="A pricture of the product"
      />
      <h3 className="grid-item__info">
        {item.title ? item.title : "Coming soon"}
      </h3>
      <p className="grid-item__info">{item.price ? item.price : ""} SEK</p>
      <div className="grid-item__btn-container">
        <button
          className="grid-item__btn"
          onClick={() => addItemToCart(item, cartItems, setCartItems)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};
export default ProductCard;
