import React from "react";
import "./App.css";
import { useGeographic } from "ol/proj";
import RoutingMain from "./routing/RoutingMain";
import "ol/ol.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { GlobalStateProvider } from "./context/GlobalState";

useGeographic();
export function Application() {
  // Legger til for å illustrere
  //SEARCHENGINE LIGGER I MAPVIEW

  return (
    <>

    <GlobalStateProvider>
      <RoutingMain />
</GlobalStateProvider>
    </>
  );
}
