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
import {MapView} from "./views";


useGeographic()
export function Application() {

// Legger til for å illustrere


    return (

        <>
                <MapView/>
                <RoutingMain/>
        </>
    )
}


