
const ProductCard = (props) => {
  return (
    <div>
      <img
        src={props.image}
        alt="A pricture of the art work"
      />
      <h3>{props.title ? props.title : 'Coming soon'}</h3>
      <p>{props.price ? props.price : ''}</p>
    </div>
  );
};
export default ProductCard;