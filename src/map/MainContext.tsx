import React, {Dispatch, SetStateAction, useState} from "react";
import { Layer } from "ol/layer";
import { Map, View } from "ol";
import { useGeographic } from "ol/proj";
import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";


useGeographic();
/*

const mapLayer = new TileLayer({source: new OSM()})

export const map = new Map({
  layers: [mapLayer],
  view : new View({
    center: [10.73, 59.911],
    zoom: 15,
  })

})*/

export const map = new Map({
  layers: [new TileLayer({ source: new OSM() })],
  view: new View({ center: [10.7522454, 59.9138688], zoom: 12 }),
});


export const MainContext = React.createContext<{
  map: Map;
  setBaseLayer: (layer: Layer) => void;
  setFeatureLayers: Dispatch<SetStateAction<Layer[]>>;
  featureLayers: Layer[];
  setCafeFeatureLayers:  Dispatch<SetStateAction<Layer[]>>;
  cafeFeatureLayers: Layer[];
  setDrinkFeatureLayers:  Dispatch<SetStateAction<Layer[]>>;
  drinkFeatureLayers: Layer[];
  setActivityFeatureLayers:  Dispatch<SetStateAction<Layer[]>>;
  activityFeatureLayers: Layer[];
  setStoreFeatureLayers:  Dispatch<SetStateAction<Layer[]>>;
  storeFeatureLayers: Layer[];
  setRestaurantFeatureLayers:  Dispatch<SetStateAction<Layer[]>>;
  restaurantFeatureLayers: Layer[];
}>({
  map,
  setBaseLayer: () => {},
  setFeatureLayers: () => {},
  featureLayers: [],
  setCafeFeatureLayers:  () => {},
  cafeFeatureLayers: [],
  setDrinkFeatureLayers:  () => {},
  drinkFeatureLayers: [],
  setActivityFeatureLayers:  () => {},
  activityFeatureLayers: [],
  setStoreFeatureLayers:  () => {},
  storeFeatureLayers: [],
  setRestaurantFeatureLayers:  () => {},
  restaurantFeatureLayers: []
});