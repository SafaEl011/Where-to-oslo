import { useContext, useEffect, useState } from "react";
import React from "react";
import { BaseMapContext } from "../../../views/MapView";
import { BarsLayer } from "./BarsLayer";

export function BarsCheckbox() {
  const { map, setFeatureLayers, featureLayers } = useContext(BaseMapContext);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (checked) {
      map.addLayer(BarsLayer);
      setFeatureLayers([...featureLayers, BarsLayer]);
    } else {
      map.removeLayer(BarsLayer);
      setFeatureLayers(featureLayers.filter((layer) => layer !== BarsLayer));
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
        Bars
      </label>
    </div>
  );
}
