import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";
import { useGeographic } from "ol/proj";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { defaults, ScaleLine } from "ol/control";
import SearchEngine from "../components/search/SearchEngine";
import { CafeCheckbox } from "../components/layers/cafes/CafeCheckbox";
import { handleZoomToUser } from "../components/position/PositionEngine";
import { ActivitiesLayer } from "../components/layers/activities/ActivitiesLayer";
import { ActivitiesCheckbox } from "../components/layers/activities/ActivitiesCheckbox";
import { BarsCheckbox } from "../components/layers/bars/BarsCheckbox";
import { ShoppingCheckbox } from "../components/layers/shopping/ShoppingCheckbox";
import { RestaurantsCheckbox } from "../components/layers/restaurants/RestaurantsCheckbox";
import { ButtonContainer } from "../components/IconButtons/ButtonContainer";

useGeographic();

const MapContext = createContext(null);

export const useMap = () => {
  return useContext(MapContext);
};

export const MapProvider = ({ map, children }) => {
  return <MapContext.Provider value={map}>{children}</MapContext.Provider>;
};

export const BaseMapContext = createContext({
  map: null,
  setBaseLayer: () => {},
  setFeatureLayers: () => {},
  featureLayers: [],
});

const MapView = () => {
  const [baseLayer, setBaseLayer] = useState(null);
  const [featureLayers, setFeatureLayers] = useState([]);
  const view = useMemo(
    () =>
      new View({
        center: [10.75, 59.915],
        zoom: 15,
      }),
    [],
  );
  const map = useMemo(
    () =>
      new Map({
        layers: [new TileLayer({ source: new OSM() })],
        view: view,
        controls: defaults().extend([new ScaleLine()]),
      }),
    [view],
  );

  const mapRef = useRef(null);

  useEffect(() => {
    map.setTarget(mapRef.current);
  }, [map]);

  return (
    <BaseMapContext.Provider
      value={{ map, setBaseLayer, setFeatureLayers, featureLayers }}
    >
      <MapProvider map={map}>
        <div className="map map-container position-relative" ref={mapRef}>
          <h4>Map</h4>
          <CafeCheckbox />
          <ActivitiesCheckbox />
          <BarsCheckbox />
          <ShoppingCheckbox />
          <RestaurantsCheckbox />
          <SearchEngine />
          <ButtonContainer />
        </div>
      </MapProvider>
    </BaseMapContext.Provider>
  );
};

export default MapView;
