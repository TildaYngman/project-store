import { HiShoppingCart } from "react-icons/hi";

const ProductCard = (props) => {
  const { onAdd, items } = props;
  return (
    <div className="grid-item">
      <img
        className="grid-item__image"
        src={props.image}
        alt="A pricture of the product"
      />
      <h3 className="grid-item__info">
        {props.title ? props.title : "Coming soon"}
      </h3>
      <p className="grid-item__info">{props.price ? props.price : ""} SEK</p>
      <div className="grid-item__btn-container">
        <button className="grid-item__btn">Buy Now</button>
        <button className="grid-item__btn">Add To Cart</button>
      </div>
    </div>
  );
};
export default ProductCard;
