import { useState } from "react";
import hamburger from "../assets/hamburger.svg";
import x from "../assets/x.svg";
// import logo from "../assets/logo.png";
import cart from "../assets/shopping-cart.png";

const Header = () => {
  const [dropdown, setDropDown] = useState(false);

  const toggleHamburger = () => {
    setDropDown((dropdown) => !dropdown);
  };

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
        <div className="relative">
          <img src={cart} alt="shopping-cart" className="h-8 object-contain" />
          <span className="hidden absolute top-0 right-1 text-white font-semi-bold bg-gray-500 px-1 rounded-full">
            5
          </span>
        </div>
        <img
          src={dropdown ? x : hamburger}
          alt="hamburger"
          className="w-6 h-6 object-contain md:hidden"
          onClick={toggleHamburger}
        />
      </div>
    </header>
  );
};

export default Header;
