import React, { useEffect, useState } from "react";
import "../css/BottomNavbar.css";

// Components for each category (if needed)
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
    icon: "/WhereToOslo/images/restaurants_4.svg",
    component: <RestaurantButton />,
  },
  {
    name: "Shopping",
    icon: "/WhereToOslo/images/storePin_2.svg",
    component: <StoreButton />,
  },
  {
    name: "Cafes",
    icon: "/WhereToOslo/images/kafePin_4.svg",
    component: <CafeButton />,
  },
  {
    name: "Activities",
    icon: "/WhereToOslo/images/activityPin_4.svg",
    component: <ActivityButton />,
  },
  {
    name: "Bars",
    icon: "/WhereToOslo/images/drinkPin_4.svg",
    component: <DrinksButton />,
  },
  {
    name: "Hikes",
    icon: "/WhereToOslo/images/tripPin.svg",
    component: <HikeButton />,
  },
];

export const CategoryList: React.FC<CategoryListProps> = ({
  show,
  handleClose,
}) => {
  const [switchStates, setSwitchStates] = useState(
    Array(categories.length).fill(false),
  );
  const [isOverlayVisible, setOverlayVisible] = useState(show);

  useEffect(() => {
    setOverlayVisible(show);
  }, [show]);

  const handleSwitchChange = (index: number) => {
    const newSwitchStates = [...switchStates];
    newSwitchStates[index] = !newSwitchStates[index];
    setSwitchStates(newSwitchStates);
  };

  const toggleOverlay = () => {
    setOverlayVisible(!isOverlayVisible);
  };

  const handleCloseOverlay = () => {
    setOverlayVisible(false);
    handleClose();
  };

  return (
    <div>
      <div className="bottomNavbar">
        <div className="categoryIconContainer" onClick={toggleOverlay}>
          <img
            src="/WhereToOslo/images/categoryPin.svg"
            alt="Category Icon"
            className="categoryIcon"
          />
          <div className="categoryText">Category</div>
        </div>
      </div>
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
    </div>
  );
};
