import { Fragment } from "react";
import { useSelector } from "react-redux";

import { Cart, Footer, Header, HeroSection, Items } from "./components";

import "./App.css";

function App() {
  const showCart = useSelector(state => state.ui.isCartVisible);

  return (
    <Fragment>
      <Header />
      {showCart && <Cart />}
      <HeroSection />
      <Items />
      <Footer />
    </Fragment>
  );
}

export default App;
