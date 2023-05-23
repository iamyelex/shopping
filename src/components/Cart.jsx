import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const total = useSelector((state) => state.cart.totalAmount);
  const unit = useSelector((state) => state.cart.totalQuantity);

  return (
    <section className="absolute md:right-4 md:top-20 lg:right-10 lg:top-20 bg-gray-300 w-[90%] md:w-[40%] p-4 rounded-lg">
      {unit > 0 ? (
        <>
          <h3 className="font-bold text-center">Your shopping cart</h3>
          <ul className="">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={{
                  title: item.title,
                  quantity: item.quantity,
                  price: item.price,
                  total: item.totalPrice,
                  id:item.id
                }}
              />
            ))}
          </ul>
          <span className="flex justify-end font-bold">Total: $ {total.toFixed(2)}</span>
        </>
      ) : (
        <p className="text-lg text-center">Cart is empty</p>
      )}
    </section>
  );
};
export default Cart;
