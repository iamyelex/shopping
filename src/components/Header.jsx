import { useState } from "react";
import hamburger from "../assets/hamburger.svg";
import x from "../assets/x.svg";
// import logo from "../assets/logo.png";
import cart from "../assets/shopping-cart.png";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/Ui";

const Header = () => {
  const [dropdown, setDropDown] = useState(false);

  const toggleHamburger = () => {
    setDropDown((dropdown) => !dropdown);
  };

  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  const dispatch = useDispatch()

  const toggleCart = () => {
    dispatch(uiActions.toggleCart())
  }

  return (
    <header className="flex items-center justify-between">
      {/* <img src={logo} alt="" className="w-40 h-30 object-contain" /> */}
      <h3 className="font-bold">Yelex.ng</h3>
      <ul className="hidden md:flex md:space-x-8 lg:space-x-20">
        <li className="list">Home</li>
        <li className="list">Clothing</li>
        <li className="list">Electronics</li>
        <li className="list">Jewelry</li>
      </ul>
      <div className="flex space-x-4">
        <div className="relative cursor-pointer" onClick={toggleCart}>
          <img src={cart} alt="shopping-cart" className="h-8 object-contain"/>
          {cartQuantity > 0 && (
            <span className="absolute top-0 right-1 text-white font-semi-bold bg-gray-500 px-1 rounded-full">
              {cartQuantity}
            </span>
          )}
        </div>
        <img
          src={dropdown ? x : hamburger}
          alt="hamburger"
          className="w-6 h-6 object-contain md:hidden"
          onClick={toggleHamburger}
        />
      </div>

      {dropdown && <nav className="absolute top-12 right-4 rounded w-1/2 h-30 bg-gray-300 p-2">
        <ul className="">
          <li className="list">Home</li>
          <li className="list">Clothing</li>
          <li className="list">Electronics</li>
          <li className="list">Jewelry</li>
        </ul>
      </nav>}
    </header>
  );
};

export default Header;
