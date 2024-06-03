import { Map, Overlay, View } from "ol";
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
import { Layer } from "ol/layer";
import SearchEngine from "../components/search/SearchEngine";
import {BarsCheckbox} from "../components/layers/bars/BarsCheckbox";
import {ActivitiesCheckbox} from "../components/layers/activities/ActivitiesCheckbox";
import {GlobalStateContext}  from "../context/GlobalState";
import MapViewBottomNavbar from "../components/navigation/MapViewBottomNavbar";
import ViewNavbar from "../components/shared/ViewNavbar";


// Set the rules for what is displayed in the return part of the application.
// Base for most of the other inputs.


const MapView = ({children}) => {
    const {globalState} = useContext(GlobalStateContext)
    const {mapRef} = globalState
    useEffect(()=>{
        if(!mapRef.current){
            window.location.reload()
        }
    },[])


    return (
<>
            <ViewNavbar/>
            <div ref={mapRef} className="map" >
            <SearchEngine/>
            <MapViewBottomNavbar/>
</div>
</>
    );
};

export default MapView;
