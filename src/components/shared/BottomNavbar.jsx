import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CategoryView from "../../views/CategoryView";
import Top5View from "../../views/Top5View";
import Button from "react-bootstrap/Button";
import "../../css/BottomNavbar.css";

const BottomNavbar = () => {
  const [showCategoryOverlay, setShowCategoryOverlay] = useState(false);
  const [showTop5Overlay, setShowTop5Overlay] = useState(false);

  // Images for category button
  const defaultCategoryImage = "/images/icons/categories.svg";
  const activeCategoryImage = "/images/icons/categoriesClick.svg";

  // Images for top5 button
  const defaultTop5Image = "/images/icons/Top5.svg";
  const activeTop5Image = "/images/icons/Top5Click.svg";

  const [categoryImage, setCategoryImage] = useState(defaultCategoryImage);
  const [top5Image, setTop5Image] = useState(defaultTop5Image);

  // Handle Category overlay
  const handleCloseCategory = () => {
    setShowCategoryOverlay(false);
    setCategoryImage(defaultCategoryImage); // Reset to default image
  };

  const handleShowCategory = () => {
    setShowCategoryOverlay(true);
    setCategoryImage(activeCategoryImage); // Set to active image
  };

  // Handle Top5 overlay
  const handleCloseTop5 = () => {
    setShowTop5Overlay(false);
    setTop5Image(defaultTop5Image); // Reset to default image
  };

  const handleShowTop5 = () => {
    setShowTop5Overlay(true);
    setTop5Image(activeTop5Image); // Set to active image
  };

  return (
      <>
        <nav className="navbar fixed-bottom navbar-light bg-light">
          <div className="container-fluid d-flex justify-content-around">
            <div className="text-center">
              <Button
                  variant="primary"
                  className="categoryBtn"
                  onClick={handleShowCategory}
              >
                <img
                    src={categoryImage}
                    alt="Categories Icon"
                    className="CategoryBtnIcon"
                />
              </Button>
              <div>Categories</div>
            </div>
            <div className="text-center">
              <Button
                  variant="primary"
                  className="top5Btn"
                  onClick={handleShowTop5}
              >
                <img
                    src={top5Image}
                    alt="Top 5 Icon"
                    className="Top5BtnIcon"
                />
              </Button>
              <div>Top 5</div>
            </div>
          </div>
        </nav>
        <CategoryView show={showCategoryOverlay} handleClose={handleCloseCategory} />
        <Top5View show={showTop5Overlay} handleClose={handleCloseTop5} />
      </>
  );
};

export default BottomNavbar;
