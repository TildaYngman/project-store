import { HiShoppingCart } from "react-icons/hi";

const ProductCard = (props) => {
  const { onAdd, items } = props;
  return (
    <div className="grid-item">
      <img
        className="grid-item__image"
        src={props.image}
        alt="A pricture of the art work"
      />
      <h3>{props.title ? props.title : 'Coming soon'}</h3>
      <p>{props.price ? props.price : ''}</p>
      <div>
        <button>Buy Now</button>
        <button>Add To Cart</button>
      </div>
    </div>
  );
};
export default ProductCard;