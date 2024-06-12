import React, { useEffect, useState } from "react";
import { CafeButton } from "../layers/cafe/CafeButton";
import { StoreButton } from "../layers/store/StoreButton";
import { ActivityButton } from "../layers/activity/ActivityButton";
import { DrinksButton } from "../layers/drink/DrinksButton";
import { RestaurantButton } from "../layers/restaurant/RestaurantButton";
import { HikeButton } from "../layers/hike/HikeButton";
import "../css/BottomNavbar.css";

interface CategoryListProps {
  show: boolean;
  handleClose: () => void;
}

interface Category {
  name: string;
  icon: string;
  component: React.ElementType;
}

const categories: Category[] = [
  {
    name: "Restaurants",
    icon: "/Where-to-oslo/images/restaurants_4.svg",
    component: RestaurantButton,
  },
  {
    name: "Shopping",
    icon: "/Where-to-oslo/images/storePin_2.svg",
    component: StoreButton,
  },
  {
    name: "Cafes",
    icon: "/Where-to-oslo/images/kafePin_4.svg",
    component: CafeButton,
  },
  {
    name: "Activities",
    icon: "/Where-to-oslo/images/activityPin_4.svg",
    component: ActivityButton,
  },
  {
    name: "Bars",
    icon: "/Where-to-oslo/images/beerPin.svg",
    component: DrinksButton,
  },
  {
    name: "Hikes",
    icon: "/Where-to-oslo/images/tripPin.svg",
    component: HikeButton,
  },
];

export const CategoryList: React.FC<CategoryListProps> = ({
  show,
  handleClose,
}) => {
  const [isOverlayVisible, setOverlayVisible] = useState(show);

  useEffect(() => {
    setOverlayVisible(show);
    document.body.classList.toggle("blur", show);

    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".overlay")) {
        handleClose();
      }
    };

    if (show) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [show, handleClose]);

  const handleCloseOverlay = () => {
    setOverlayVisible(false);
    handleClose();
  };

  return (
    <>
      {isOverlayVisible && <div className="blur-background" />}
      <div
        className={isOverlayVisible ? "overlay show" : "overlay hide"}
        onClick={handleCloseOverlay}
      >
        <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
          <div className="category-list">
            {categories.map((category, index) => (
              <div key={index} className="category-item">
                <category.component />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
