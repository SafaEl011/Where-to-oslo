import React, {useEffect, useMemo, useRef} from "react";
import "./App.css";
import { OSM } from "ol/source";
import TileLayer from "ol/layer/Tile";
import { View } from "ol";
import { Map } from "ol";
import {useGeographic} from "ol/proj";

useGeographic()
export function Application() {
    const view = useMemo(() => new View({
        center: [10.5, 59.7], zoom: 11
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
    }, []);

    return (
        <>
            <div className={"map"} ref={mapRef}></div>
        </>
    )
}


