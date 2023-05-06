import React from "react";
import "./Brands.css";
import { BrandsCards } from "./BrandsCards";

const Brands = () => {
  return (
    <div className="brands">
      <h1>Shop by Brand</h1>

      <div className="brands__container">
        <BrandsCards />
        <BrandsCards />
        <BrandsCards />
        <BrandsCards />
        <BrandsCards />
        <BrandsCards />
        <BrandsCards />
        <BrandsCards />
        <BrandsCards />
        <BrandsCards />
      </div>
    </div>
  );
};

export default Brands;
