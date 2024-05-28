import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";
import { useGeographic } from "ol/proj";
import React, {Dispatch, SetStateAction, useEffect, useMemo, useRef} from "react";
import {Layer} from "ol/layer";
import SearchEngine from "../components/search/SearchEngine";

const MapView = () => {
    return (
        <div>
            <h4>Map</h4>
            <SearchEngine/>
        </div>
    )
}

export default MapView;
