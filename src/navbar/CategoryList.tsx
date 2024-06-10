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
  const [activeCategories, setActiveCategories] = useState<string[]>([]);

  useEffect(() => {
    setOverlayVisible(show);
  }, [show]);

  const handleCloseOverlay = () => {
    setOverlayVisible(false);
    handleClose();
  };

  const handleCategoryClick = (categoryName: string) => {
    setActiveCategories(prevActiveCategories => {
      if (prevActiveCategories.includes(categoryName)) {
        return prevActiveCategories.filter(category => category !== categoryName);
      } else {
        return [...prevActiveCategories, categoryName];
      }
    });
  };

  const isCategoryActive = (categoryName: string) => {
    return activeCategories.includes(categoryName);
  };

  return (
      <div className={isOverlayVisible ? "overlay show" : "overlay hide"} onClick={handleCloseOverlay}>
        <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
          <button className="btn btn-success" onClick={handleCloseOverlay}>
            Close
          </button>
          <h2>Categories</h2>
          <div className="category-list">
            {categories.map((category, index) => (
                <div key={index} className="category-item">
                  <div className={`btn ${isCategoryActive(category.name) ? 'btn-success' : ''}`} onClick={() => handleCategoryClick(category.name)}>
                    <img src={category.icon} alt={`${category.name} Icon`} className="categoryIcon" />
                    {category.component}
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
  );
};
