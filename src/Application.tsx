import React, {
  MutableRefObject,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import "./Application.css";
import "ol/ol.css";
import { MainContext, map } from "./map/MainContext";
import { Layer } from "ol/layer";
import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";
import { CategoryList } from "./navbar/CategoryList";
import { ButtonsColumn } from "./buttons/ButtonsColumn";
import { SearchLocations2 } from "./buttons/SearchLocations2";

export function Application() {
  const { map } = useContext(MainContext);
  const [featureLayers, setFeatureLayers] = useState<Layer[]>([]);
  const [cafeFeatureLayers, setCafeFeatureLayers] = useState<Layer[]>([]);
  const [drinkFeatureLayers, setDrinkFeatureLayers] = useState<Layer[]>([]);
  const [activityFeatureLayers, setActivityFeatureLayers] = useState<Layer[]>(
    [],
  );
  const [storeFeatureLayers, setStoreFeatureLayers] = useState<Layer[]>([]);
  const [restaurantFeatureLayers, setRestaurantFeatureLayers] = useState<
    Layer[]
  >([]);
  const [hikeFeatureLayers, setHikeFeatureLayers] = useState<Layer[]>([]);

  const [baseLayer, setBaseLayer] = useState<Layer>(
    new TileLayer({ source: new OSM() }),
  );

  const layers = useMemo(
    () => [
      baseLayer,
      ...featureLayers,
      ...cafeFeatureLayers,
      ...drinkFeatureLayers,
      ...activityFeatureLayers,
      ...restaurantFeatureLayers,
      ...storeFeatureLayers,
      ...hikeFeatureLayers,
    ],
    [
      baseLayer,
      featureLayers,
      cafeFeatureLayers,
      drinkFeatureLayers,
      activityFeatureLayers,
      restaurantFeatureLayers,
      storeFeatureLayers,
      hikeFeatureLayers,
    ],
  );

  useEffect(() => map.setLayers(layers), [layers]);

  const mapRef = useRef() as MutableRefObject<HTMLDivElement>;
  useEffect(() => map.setTarget(mapRef.current), []);
  useEffect(() => map.setLayers(layers), [layers]);

  return (
    <MainContext.Provider
      value={{
        map,
        setBaseLayer,
        featureLayers,
        setFeatureLayers,
        setCafeFeatureLayers,
        cafeFeatureLayers,
        setDrinkFeatureLayers,
        drinkFeatureLayers,
        storeFeatureLayers,
        setStoreFeatureLayers,
        activityFeatureLayers,
        setActivityFeatureLayers,
        restaurantFeatureLayers,
        setRestaurantFeatureLayers,
        hikeFeatureLayers,
        setHikeFeatureLayers,
      }}
    >
      <div>
        <main>
          <div
            ref={mapRef}
            className="map map-container position-relative"
          ></div>
          <ButtonsColumn />
          <CategoryList />
        </main>
      </div>
    </MainContext.Provider>
  );
}
