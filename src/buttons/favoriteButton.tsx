import React, { useState } from "react";
import IconButton from "./iconsButton";
import "../css/iconStyles.css";

export const FavoriteButton: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <IconButton className="favorite-button" onClick={handleShow}>
      <img src="images/FavoriteBtn.svg" alt="Favorite Icon" className="icon" />
    </IconButton>
  );
};
