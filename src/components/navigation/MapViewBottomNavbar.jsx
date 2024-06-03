import React, { useState } from "react";
import CategoryModal from "../modals/CategoryModal";
import Button from "react-bootstrap/Button";
import Top5Modal from "../modals/Top5Modal";
import "../../styles/BottomNavbar.css"
// import defaultCategoryImage from "/assets/images/icons/categories.svg"
// import activeCategoryImage from "/assets/images/icons/categoriesClick.svg"

const MapViewBottomNavbar = () => {
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [showTop5Modal, setShowTop5Modal] = useState(false);

  // Images for category button
  const defaultCategoryImage = "/images/icons/categories.svg";
  const activeCategoryImage = "/images/icons/categoriesClick.svg";

  // Images for top5 button
  const defaultTop5Image = "/images/icons/Top5.svg";
  const activeTop5Image = "/images/icons/Top5Click.svg";

  const [categoryImage, setCategoryImage] = useState(defaultCategoryImage);
  const [top5Image, setTop5Image] = useState(defaultTop5Image);

  // Handle Category modal
  const handleCloseCategory = () => {
    setShowCategoryModal(false);
    setCategoryImage(defaultCategoryImage); // Reset to default image
  };

  const handleShowCategory = () => {
    setShowCategoryModal(true);
    setCategoryImage(activeCategoryImage); // Set to active image
  };

  // Handle Top5 modal
  const handleCloseTop5 = () => {
    setShowTop5Modal(false);
    setTop5Image(defaultTop5Image); // Reset to default image
  };

  const handleShowTop5 = () => {
    setShowTop5Modal(true);
    setTop5Image(activeTop5Image); // Set to active image
  };

  return (
      <>
        <nav className="navbar fixed-bottom navbar-light bg-light  ">
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
                    // className="CategoryBtnIcon"
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
                    // className="w-full h-full"
                    
                />
              </Button>
              <div>Top 5</div>
            </div>
          </div>
        </nav>
        <CategoryModal show={showCategoryModal} handleClose={handleCloseCategory} />
        <Top5Modal show={showTop5Modal} handleClose={handleCloseTop5} />
      </>
  );
};


export default MapViewBottomNavbar;
