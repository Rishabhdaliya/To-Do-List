import React from "react";
import "./Brands.css";
import brand1 from "../../assets/microsoft.png";

export const BrandsCards = () => {
  return (
    <div>
      <div className="brands__cards">
        <img src={brand1} alt="" />
      </div>
    </div>
  );
};
