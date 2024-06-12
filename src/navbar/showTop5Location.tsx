import React, { useContext, useEffect, useMemo, useRef } from "react";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { Overlay } from "ol";
import { MainContext } from "../map/MainContext";
import { Feature } from "ol";
import { Point } from "ol/geom";
import { Style, Icon } from "ol/style";
import { Top5Item, Top5CategoryType } from "./Top5List";

type ShowPinsButtonProps = {
    places: Top5Item[];
};

const getIconForPlace = (place: Top5Item) => {
    switch (place.type) {
        case "store": return "./images/storePin_2.svg";
        case "bar": return "./images/beerPin.svg";
        case "restaurant": return "./images/restaurants_4.svg";
        case "cafe": return "./images/kafePin_4.svg";
        case "activity": return "./images/activityPin_4.svg";
        case "hike": return "./images/tripPin.svg";
        default: return "";
    }
};

export const ShowPinsButton: React.FC<ShowPinsButtonProps> = ({ places }) => {
    const { map } = useContext(MainContext);
    const overlay = useMemo(() => new Overlay({}), []);
    const overlayRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        overlay.setElement(overlayRef.current as HTMLElement);
        map.addOverlay(overlay);
        return () => {
            map.removeOverlay(overlay);
        };
    }, [overlay, map]);

    useEffect(() => {
        const features = places.map(place => {
            const feature = new Feature(new Point(place.coordinates));
            feature.setProperties({
                name: place.name,
                description: place.description,
                type: place.type, // Add this line
            });
            return feature;
        });

        const vectorSource = new VectorSource({
            features,
        });

        const vectorLayer = new VectorLayer({
            source: vectorSource,
            style: (feature) => {
                const type = feature.get('type') as Top5CategoryType;
                return new Style({
                    image: new Icon({
                        anchor: [0.5, 1],
                        src: getIconForPlace({ type } as Top5Item), // Update this line
                    }),
                });
            },
        });

        map.addLayer(vectorLayer);

        return () => {
            map.removeLayer(vectorLayer);
        };
    }, [places, map]);

    return (
        <div ref={overlayRef} className={"pinOverlay"}>
            {places.length > 0 && (
                <>
                    <p>{places[0].name}</p>
                </>
            )}
        </div>
    );
};