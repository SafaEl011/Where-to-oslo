import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";
import { useGeographic } from "ol/proj";
import React, {createContext, Dispatch, SetStateAction, useContext, useEffect, useMemo, useRef} from "react";
import {Layer} from "ol/layer";
import SearchEngine from "../components/search/SearchEngine";


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



  const MapView = () => {

    const view = useMemo(() => new View({
        center: [10.75, 59.915], zoom: 15
    }), []);
   const map = useMemo(() => new Map({
        layers: [
            new TileLayer({source: new OSM()}),
        ],
        view: view
    }), [view]);
    const mapRef = useRef(null);

    useEffect(() => {
        map.setTarget(mapRef.current)
    }, [map]);



    return (
<MapProvider map = {map}>
        <div className={"map"} ref={mapRef}>

            <h4>Map</h4>

            <SearchEngine/>
        </div>
</MapProvider>
    )
}
export default MapView;
