import { useContext, useEffect, useState } from "react";
import React from "react";
import { BaseMapContext } from "../../../views/MapView";
import { CafeLayer } from "./CafeLayer";

export function CafeCheckbox() {
  const { map, setFeatureLayers, featureLayers } = useContext(BaseMapContext);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (checked) {
      map.addLayer(CafeLayer);
      setFeatureLayers([...featureLayers, CafeLayer]);
    } else {
      map.removeLayer(CafeLayer);
      setFeatureLayers(featureLayers.filter((layer) => layer !== CafeLayer));
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
        Cafes
      </label>
    </div>
  );
}
