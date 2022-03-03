import React from "react";
import { useSelector } from "react-redux";
import Header from "./component/Header";
import Products from "./component/Products";
import Footer from "./component/Footer";
import ReviewOrder from "./component/ReviewOrder";
import "./index.css";

const App = () => {
  const { orderInProgress } = useSelector((state) => state);

  return (
    <>
      <div data-cy="products-list" className="BackgroundImage">
        <Header />
        <h2> Menu</h2>
        <Products />
        {orderInProgress && <ReviewOrder />}
      </div>

      <Footer />
    </>
  );
};

export default App;
