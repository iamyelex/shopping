import { useDispatch } from "react-redux";
import { cartActions } from "../../store/Cart";

/* eslint-disable react/prop-types */
const CartItem = (props) => {
  const {title, quantity, price, total, id} = props.item;
  const dispatch = useDispatch();

  const removeItemFromCart = () => {
    dispatch(cartActions.removeFromCart({id, price}));
  };

  const addToCart = () => {
    dispatch(cartActions.addToCart({title, price, id}));
  };

  return (
    <div className="flex items-center justify-between border-b pb-2">
      <div className="w-1/2">
        <h4 className="font-bold">{title}</h4>
        <span className="font-thin">
          x <span className="text-lg font-thin">{quantity}</span>
        </span>
      </div>
      <div className="">
        <p className="font-extrabold">${total.toFixed(2)}</p>
        <div>
          <button
            className="text-lg font-bold border bg-black text-white w-1/2 focus:outline-none"
            onClick={addToCart}
          >
            +
          </button>
          <button
            className="text-lg font-bold border bg-black text-white w-1/2 focus:outline-none"
            onClick={removeItemFromCart}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
