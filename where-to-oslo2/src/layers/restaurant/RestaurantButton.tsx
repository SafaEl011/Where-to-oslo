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
import {activeRestaurantStyle, restaurantStyle} from "./RestaurantStyle";


const restaurantLayer = new VectorLayer({
  className: "Restaurant",
  source: new VectorSource({
    url: "/WhereToOslo/json/restaurants.geojson",
    format: new GeoJSON(),
  }),
  style: restaurantStyle,
});

export function RestaurantButton() {
  const [clicked, setClicked] = useState(false);
  const [activeFeature, setActiveFeature] = useState<restaurantStyle | undefined>();
  const { setRestaurantFeatureLayers , map } = useContext(MainContext);

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
      layerFilter: (l) => l === restaurantLayer,
    });
    if (features.length === 1) {
      setActiveFeature(features[0] as restaurantStyle);
      overlay.setPosition(e.coordinate);
    } else {
      setActiveFeature(undefined);
      overlay.setPosition(undefined);
    }
  }

  useEffect(() => {
    activeFeature?.setStyle(activeRestaurantStyle);
    return () => activeFeature?.setStyle(undefined);
  }, [activeFeature]);

  useEffect(() => {
    if (clicked) {
      setRestaurantFeatureLayers((old: any) => [...old, restaurantLayer]);
      map?.on("click", handlePointerMove);
    } else {
      setRestaurantFeatureLayers((old: any) => old.filter((l: any) => l !== restaurantLayer));
      map?.un("click", handlePointerMove);
    }
  }, [clicked, setRestaurantFeatureLayers, map]);

  return (
      <div>
        <label>
          <input
              type="button"
              value="Restaurant"
              onClick={() => setClicked((prevClicked) => !prevClicked)}
          />
          {clicked ? "Hide" : "Show"} Restaurant
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