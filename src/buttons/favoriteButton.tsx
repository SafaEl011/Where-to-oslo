import React, { useState } from "react";
import IconButton from "./iconsButton";
import "../css/iconStyles.css";

export const FavoriteButton: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <IconButton className="favorite-button" onClick={handleShow}>
        <img
          src="images/FavoriteBtn.svg"
          alt="Favorite Icon"
          className="icon"
        />
      </IconButton>

      {show && (
        <div className="favorite-overlay show" onClick={handleClose}>
          <div
            className="favorite-overlay-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="overlay-close-button" onClick={handleClose}>
              &times;
            </button>
            <h2>Your Favorite Places</h2>
            <p>
              Here lies your favorite pin places. Set places as favorites and
              they will show up here.
            </p>
          </div>
        </div>
      )}
    </>
  );
};
