import React, {useEffect, useMemo, useRef} from "react";
import "./App.css";
import { OSM } from "ol/source";
import TileLayer from "ol/layer/Tile";
import { View } from "ol";
import { Map } from "ol";
import {useGeographic} from "ol/proj";
import RoutingMain from "./routing/RoutingMain";
import "ol/ol.css";
import 'bootstrap/dist/css/bootstrap.min.css';


useGeographic()
export function Application() {

// Legger til for å illustrere

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
    }, []);

    return (
        <>
            <div className={"map"} ref={mapRef}>
                <RoutingMain/>
            </div>
        </>
    )
}


