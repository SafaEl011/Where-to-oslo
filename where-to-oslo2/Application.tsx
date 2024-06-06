import React, {MutableRefObject, useContext, useEffect, useMemo, useRef, useState} from "react";
import "./Application.css";
import "ol/ol.css";
import { MainContext, map } from "./src/map/MainContext";
import { Layer } from "ol/layer";
import { CenterOnUser } from "./src/buttons/centerOnUser";
import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";
import CategoryModal from "./src/navbar/categoryModal";
import Top5Modal from "./src/navbar/top5Modal";
import SearchEngine from "./src/buttons/search";
import SettingsButton from "./src/buttons/settingsButton";
import {SearchLocations} from "./src/buttons/search2";

import {CategoryList} from "./src/navbar/CategoryList";

export function Application() {
    const { map } = useContext(MainContext);
    const [featureLayers, setFeatureLayers] = useState<Layer[]>([]);
    const [cafeFeatureLayers, setCafeFeatureLayers] = useState<Layer[]>([]);
    const [drinkFeatureLayers, setDrinkFeatureLayers] = useState<Layer[]>([]);
    const [activityFeatureLayers, setActivityFeatureLayers] = useState<Layer[]>([]);
    const [storeFeatureLayers, setStoreFeatureLayers] = useState<Layer[]>([]);
    const [restaurantFeatureLayers, setRestaurantFeatureLayers] = useState<Layer[]>([]);


    const [baseLayer, setBaseLayer] = useState<Layer>(
        new TileLayer({ source: new OSM() })
    );
    /*
    const [baseLayer, setBaseLayer] = useState<Layer[]>([
        new TileLayer({
            source: new OSM(),
        }),
    ]);*/
/*
    const layers = useMemo(
        () => [baseLayer, ...featureLayers, ...cafeFeatureLayers, ...barsFeatureLayers, ...activityFeatureLayers, storeFeatureLayers],
        [baseLayer, featureLayers, cafeFeatureLayers, barsFeatureLayers, activityFeatureLayers, storeFeatureLayers ]
    );*/
    const layers = useMemo(
        () => [baseLayer, ...featureLayers, ...cafeFeatureLayers, ...drinkFeatureLayers, ...activityFeatureLayers, ...restaurantFeatureLayers],
        [baseLayer, featureLayers, cafeFeatureLayers, drinkFeatureLayers, activityFeatureLayers, restaurantFeatureLayers]
    );


    useEffect(() => map.setLayers(layers), [layers]);

    const mapRef = useRef() as MutableRefObject<HTMLDivElement>;
  useEffect(() => map.setTarget(mapRef.current), []);
  useEffect(() => map.setLayers(layers), [layers]);

  return (
    <MainContext.Provider value={{ map, setBaseLayer, featureLayers, setFeatureLayers, setCafeFeatureLayers, cafeFeatureLayers, setDrinkFeatureLayers, drinkFeatureLayers, storeFeatureLayers, setStoreFeatureLayers, activityFeatureLayers, setActivityFeatureLayers, restaurantFeatureLayers, setRestaurantFeatureLayers }}>
        <CenterOnUser view={map.getView()} map={map} />
       <div>
            <main>
        <SearchEngine />
        <SettingsButton />
        <SearchLocations/>
       <CategoryList/>
            </main>
       </div>

        <nav>
          <CategoryModal />
        <Top5Modal />
      </nav>
                <div ref={mapRef} className="map"  ></div>
    </MainContext.Provider>
  );
}
