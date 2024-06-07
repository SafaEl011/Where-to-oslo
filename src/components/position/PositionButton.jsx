import React, { useEffect } from "react";
import positionIcon from "/images/icons/position.svg";
import IconButton from "../IconButtons/IconButton";
import { handleZoomToUser } from "./PositionEngine";

const PositionButton = ({ onClick }) => {
  useEffect(() => {
    const positionButton =
      document.getElementsByClassName("position-button")[0];
    positionButton.addEventListener("click", handleZoomToUser);

    return () => {
      positionButton.removeEventListener("click", handleZoomToUser);
    };
  }, []);
  return (
    <IconButton className="position-button" onClick={onClick}>
      <img src={positionIcon} alt="Position Icon" className="icon" />
    </IconButton>
  );
};

export default PositionButton;
