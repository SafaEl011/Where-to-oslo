import React, { useContext, useState } from "react";
import { MainContext } from "../map/MainContext";
import { Feature } from "ol";
import { Point } from "ol/geom";
import { Vector as VectorLayer } from "ol/layer";
import { Vector as VectorSource } from "ol/source";
import IconButton from "./iconsButton";
import "../css/iconStyles.css";

export const CenterOnUser: React.FC = () => {
    const { map } = useContext(MainContext);
    const [show, setShow] = useState<boolean>(false);

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        navigator.geolocation.watchPosition(
            (pos) => {
                const { latitude, longitude } = pos.coords;
                map.getView().animate({ center: [longitude, latitude], zoom: 17 });
                const marker = new Feature(new Point([longitude, latitude]));
                const vectorLayer = new VectorLayer({
                    source: new VectorSource({
                        features: [marker],
                    }),
                });
                map.addLayer(vectorLayer);
                setShow(true);
            },
            (error) => {
                console.error("Error getting geolocation:", error);
            },
        );
    };

    return (
        <IconButton className="position-button" onClick={handleClick}>
            <img src="images/PositionBtn.svg" alt="Position Icon" className="icon" />
        </IconButton>
    );
};
