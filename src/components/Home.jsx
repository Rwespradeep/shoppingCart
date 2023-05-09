import React from "react";
import { CartState } from "../context/Context";
import Filter from "./Filter";
import SingleProduct from "./SingleProduct";
import "./styles.css";

const Home = () => {
  const {
    state: { products },
  } = CartState();

  console.log(products);

  return (
    <div className="Home-Container">
      <Filter />
      <div className="product-container">
        {products.map((prod) => {
          return <SingleProduct prod={prod} key={prod.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
