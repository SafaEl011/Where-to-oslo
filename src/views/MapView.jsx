import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";
import { useGeographic } from "ol/proj";
import React, { createContext, Dispatch, SetStateAction, useContext, useEffect, useMemo, useRef, useState } from "react";
import { defaults, ScaleLine } from "ol/control";
import SearchEngine from "../components/search/SearchEngine";
import { Layer } from "ol/layer";
import {CafeCheckbox} from "../components/layers/cafes/CafeCheckbox";
import {handleZoomToUser} from "../components/position/PositionEngine";
import PositionButton from "../components/position/PositionButton";

useGeographic();

const MapContext = createContext(null);

export const useMap = () => {
    return useContext(MapContext);
};

export const MapProvider = ({ map, children }) => {
    return (
        <MapContext.Provider value={map}>
            {children}
        </MapContext.Provider>
    );
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
    const view = useMemo(() => new View({
        center: [10.75, 59.915],
        zoom: 15,
    }), []);
    const map = useMemo(() => new Map({
        layers: [
            new TileLayer({ source: new OSM() }),
        ],
        view: view,
        controls: defaults().extend([new ScaleLine()]),
    }), [view]);

    const mapRef = useRef(null);

    useEffect(() => {
        map.setTarget(mapRef.current);
    }, [map]);

    useEffect(() => {
        // Attach geolocation handler on component mount
        document.addEventListener('click', handleZoomToUser);

        // Clean up event listener on component unmount
        return () => {
            document.removeEventListener('click', handleZoomToUser);
        };
    }, []); // Empty dependency array ensures the effect runs only once on mount



    return (
        <BaseMapContext.Provider value={{ map, setBaseLayer, setFeatureLayers, featureLayers }}>
            <MapProvider map={map}>
                <div className="map" ref={mapRef}>
                    <h4>Map</h4>
                    <CafeCheckbox/>
                    <SearchEngine />
                </div>
            </MapProvider>
        </BaseMapContext.Provider>
    );
};

export default MapView;
