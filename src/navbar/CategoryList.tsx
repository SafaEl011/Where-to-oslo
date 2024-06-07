import "bootstrap/dist/css/bootstrap.min.css";

import { CafeButton } from "../layers/cafe/CafeButton";
import { StoreButton } from "../layers/store/StoreButton";
import { ActivityButton } from "../layers/activity/ActivityButton";
import { DrinksButton } from "../layers/drink/DrinksButton";
import { RestaurantButton } from "../layers/restaurant/RestaurantButton";
import React from "react";
import { HikeButton } from "../layers/hike/HikeButton";

export const CategoryList = () => {
  const categories = [
    <CafeButton />,
    <StoreButton />,
    <ActivityButton />,
    <DrinksButton />,
    <RestaurantButton />,
    <HikeButton />,
  ];

  return (
    <div className="categoryContainer mt-5">
      <div className="d-flex flex-wrap justify-content-around">
        {categories.map((category, index) => (
          <button key={index} className="btn btn-success m-2 col-4 ">
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};
