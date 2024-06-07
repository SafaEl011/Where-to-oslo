import React, { useState } from "react";
import { SearchEngine } from "./search";
import { CenterOnUser } from "./centerOnUser";
import { FavoriteButton } from "./favoriteButton";
import { SettingsButton } from "./settingsButton";
import "../css/iconStyles.css";

export const ButtonsColumn: React.FC = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  return (
    <>
      <div className="buttons-column">
        <SearchEngine showOverlay={showOverlay} toggleOverlay={toggleOverlay} />
        <CenterOnUser />
        <FavoriteButton />
        <SettingsButton />
      </div>
      <div
        className={`overlay ${showOverlay ? "show" : ""}`}
        onClick={toggleOverlay}
      ></div>
    </>
  );
};
