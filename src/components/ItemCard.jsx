import { useDispatch } from "react-redux";
import { cartActions } from "../../store/Cart";

const ItemCard = (props) => {
  // eslint-disable-next-line react/prop-types
  const { image, title, price, description, id } = props;
  // console.log(id)

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(cartActions.addToCart({ price, title, id }));
  };

  return (
    <div className="border border-lime-500 rounded-lg p-4 cursor-pointer">
      <img src={image} alt="item" className="w-full h-40 object-contain" />
      <h4 className="text-sm text-center font-bold py-2 lg:whitespace-nowrap lg:overflow-hidden">
        {title}
      </h4>
      <p className="text-xs font-light h-20 overflow-hidden">{description}</p>
      <div className="flex items-center justify-between pt-2">
        <p className="text-lg font-extrabold">${price}</p>
        <button
          className="border py-1 px-4 rounded-md bg-black text-lime-300"
          onClick={addToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
