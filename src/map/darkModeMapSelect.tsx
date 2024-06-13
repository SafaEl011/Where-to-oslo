import React, { useContext, useState } from "react";
import TileLayer from "ol/layer/Tile";
import { OSM, StadiaMaps } from "ol/source";
import { MainContext } from "./MainContext";

export function ModeSelector() {
  const { setBaseLayer } = useContext(MainContext);

  const options = {
    osm: {
      name: "Open Street Map",
      layer: new TileLayer({ source: new OSM() }),
    },
    dark: {
      name: "Stadia (dark)",
      layer: new TileLayer({
        source: new StadiaMaps({
          layer: "alidade_smooth_dark",
          apiKey: "69dfeec6-dedf-4d6d-8344-154bbd2724d9",
        }),
      }),
    },
  };

  const [selected, setSelected] = useState<keyof typeof options>("osm");

  const handleButtonClick = (mode: keyof typeof options) => {
    setSelected(mode);
    if (options[mode]?.layer) {
      setBaseLayer(options[mode].layer!);
    }
  };

  return (
    <div className="mapSelector">
      <button
        onClick={() => handleButtonClick("osm")}
        className={`light-dark-buttons ${selected === "osm" ? "selected" : ""}`}
      >
        Light Map
      </button>
      <button
        onClick={() => handleButtonClick("dark")}
        className={`light-dark-buttons ${
          selected === "dark" ? "selected" : ""
        }`}
      >
        Dark Map
      </button>
    </div>
  );
}
