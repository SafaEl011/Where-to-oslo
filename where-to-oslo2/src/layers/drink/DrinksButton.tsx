import React, {
  MutableRefObject, useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { GeoJSON } from "ol/format";
import { MapBrowserEvent, Overlay } from "ol";
import { FeatureLike } from "ol/Feature";
import { MainContext } from "../../map/MainContext";
import {activeDrinkStyle, drinkStyle} from "./DrinkStyle";


const drinkLayer = new VectorLayer({
  className: "Drink",
  source: new VectorSource({
    url: "/WhereToOslo/json/drinks.geojson",
    format: new GeoJSON(),
  }),
  style: drinkStyle,
});

export function DrinksButton() {
  const [clicked, setClicked] = useState(false);
  const [activeFeature, setActiveFeature] = useState<drinkStyle | undefined>();
  const { setDrinkFeatureLayers, map } = useContext(MainContext);

  const overlay = useMemo(() => new Overlay({}), []);
  const overlayRef = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    overlay.setElement(overlayRef.current);
    map.addOverlay(overlay);
    return () => {
      map.removeOverlay(overlay);
    };
  }, [overlay, map]);

  function handlePointerMove(e: MapBrowserEvent<MouseEvent>) {
    const features: FeatureLike[] = [];
    map.forEachFeatureAtPixel(e.pixel, (f) => features.push(f), {
      hitTolerance: 5,
      layerFilter: (l) => l === drinkLayer,
    });
    if (features.length === 1) {
      setActiveFeature(features[0] as drinkStyle);
      overlay.setPosition(e.coordinate);
    } else {
      setActiveFeature(undefined);
      overlay.setPosition(undefined);
    }
  }

  useEffect(() => {
    activeFeature?.setStyle(activeDrinkStyle);
    return () => activeFeature?.setStyle(undefined);
  }, [activeFeature]);

  useEffect(() => {
    if (clicked) {
      setDrinkFeatureLayers((old: any) => [...old, drinkLayer]);
      map?.on("click", handlePointerMove);
    } else {
      setDrinkFeatureLayers((old: any) => old.filter((l: any) => l !== drinkLayer));
      map?.un("click", handlePointerMove);
    }
  }, [clicked, setDrinkFeatureLayers, map]);

  return (
      <div>
        <label>
          <input
              type="button"
              value="Drinks"
              onClick={() => setClicked((prevClicked) => !prevClicked)}
          />
          {clicked ? "Hide" : "Show"} Drinks
        </label>
        <div ref={overlayRef} className={"overlay"}>
          {activeFeature && (
              <>
                <p>Navn: {activeFeature.get("name")}</p>
              </>
          )}
        </div>
      </div>
  );
}
