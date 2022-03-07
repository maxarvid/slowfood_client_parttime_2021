import React from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import Footer from "./components/Footer";
import ReviewOrder from "./components/ReviewOrder";
import "./index.css";

const App = () => {
  return (
    <>
      <div data-cy="products-list" className="BackgroundImage">
        <Header />
        <h2> Menu</h2>
        <Products />
        <ReviewOrder />
      </div>

      <Footer />
    </>
  );
};

export default App;
