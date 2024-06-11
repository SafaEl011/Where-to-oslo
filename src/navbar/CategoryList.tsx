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
  { name: "Restaurants", icon: "/WhereToOslo/images/restaurants_4.svg", component: <RestaurantButton /> },
  { name: "Shopping", icon: "/WhereToOslo/images/storePin_2.svg", component: <StoreButton /> },
  { name: "Cafes", icon: "/WhereToOslo/images/kafePin_4.svg", component: <CafeButton /> },
  { name: "Activities", icon: "/WhereToOslo/images/activityPin_4.svg", component: <ActivityButton /> },
  { name: "Bars", icon: "/WhereToOslo/images/beerPin.svg", component: <DrinksButton /> },
  { name: "Hikes", icon: "/WhereToOslo/images/tripPin.svg", component: <HikeButton /> },
];

export const CategoryList: React.FC<CategoryListProps> = ({ show, handleClose }) => {
  const [isOverlayVisible, setOverlayVisible] = useState(show);

  useEffect(() => {
    setOverlayVisible(show);
  }, [show]);

  const handleCloseOverlay = () => {
    setOverlayVisible(false);
    handleClose();
  };

  return (
      <div className={isOverlayVisible ? "overlay show" : "overlay hide"} onClick={handleCloseOverlay}>
        <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
          <button className="overlay-close-button" onClick={handleCloseOverlay}>
            &times;
          </button>
          <div className="category-list">
            {categories.map((category, index) => (
                <div key={index} className="category-item">
                  <div className="category-button">
                    <img src={category.icon} alt={`${category.name} Icon`} className="category-icon"/>
                    {category.component}
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
  );
};

