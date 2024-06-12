import React, { useEffect, useState } from "react";
import "../css/BottomNavbar.css";
import { CafeButton } from "../layers/cafe/CafeButton";
import { StoreButton } from "../layers/store/StoreButton";
import { ActivityButton } from "../layers/activity/ActivityButton";
import { DrinksButton } from "../layers/drink/DrinksButton";
import { RestaurantButton } from "../layers/restaurant/RestaurantButton";
import { HikeButton } from "../layers/hike/HikeButton";

interface CategoryListProps {
  show: boolean;
  handleClose: () => void;
}

export const categories = [
  {
    name: "Restaurants",
    icon: "/Where-to-oslo/images/restaurants_4.svg",
    component: <RestaurantButton />,
  },
  {
    name: "Shopping",
    icon: "/Where-to-oslo/images/storePin_2.svg",
    component: <StoreButton />,
  },
  {
    name: "Cafes",
    icon: "/Where-to-oslo/images/kafePin_4.svg",
    component: <CafeButton />,
  },
  {
    name: "Activities",
    icon: "/Where-to-oslo/images/activityPin_4.svg",
    component: <ActivityButton />,
  },
  {
    name: "Bars",
    icon: "/Where-to-oslo/images/beerPin.svg",
    component: <DrinksButton />,
  },
  {
    name: "Hikes",
    icon: "/Where-to-oslo/images/tripPin.svg",
    component: <HikeButton />,
  },
];

export const CategoryList: React.FC<CategoryListProps> = ({
  show,
  handleClose,
}) => {
  const [isOverlayVisible, setOverlayVisible] = useState(show);

  useEffect(() => {
    setOverlayVisible(show);
  }, [show]);

  const handleCloseOverlay = () => {
    setOverlayVisible(false);
    handleClose();
  };

  return (
    <div
      className={isOverlayVisible ? "overlay show" : "overlay hide"}
      onClick={handleCloseOverlay}
    >
      <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
        <button className="btn btn-success" onClick={handleCloseOverlay}>
          Close
        </button>
        <h2>Categories</h2>
        <div className="category-list">
          {categories.map((category, index) => (
            <div key={index} className="category-item">
              <div className="btn btn-success">
                <img
                  src={category.icon}
                  alt={`${category.name} Icon`}
                  className="categoryIcon"
                />
                {category.component}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
