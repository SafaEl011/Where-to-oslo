import { useContext, useEffect, useState } from "react";
import React from "react";
import { BaseMapContext } from "../../../views/MapView";
import { ShoppingLayer } from "./ShoppingLayer";

export function ShoppingCheckbox() {
  const { map, setFeatureLayers, featureLayers } = useContext(BaseMapContext);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (checked) {
      map.addLayer(ShoppingLayer);
      setFeatureLayers([...featureLayers, ShoppingLayer]);
    } else {
      map.removeLayer(ShoppingLayer);
      setFeatureLayers(
        featureLayers.filter((layer) => layer !== ShoppingLayer),
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
        Shops
      </label>
    </div>
  );
}
