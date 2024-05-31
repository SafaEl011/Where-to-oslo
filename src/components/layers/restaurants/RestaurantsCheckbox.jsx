import { useContext, useEffect, useState } from "react";
import React from "react";
import { BaseMapContext } from "../../../views/MapView";
import { RestaurantsLayer } from "./RestaurantsLayer";

export function RestaurantsCheckbox() {
  const { map, setFeatureLayers, featureLayers } = useContext(BaseMapContext);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (checked) {
      map.addLayer(RestaurantsLayer);
      setFeatureLayers([...featureLayers, RestaurantsLayer]);
    } else {
      map.removeLayer(RestaurantsLayer);
      setFeatureLayers(
        featureLayers.filter((layer) => layer !== RestaurantsLayer),
      );
    }
  }, [checked]);

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        Restaurants
      </label>
    </div>
  );
}
