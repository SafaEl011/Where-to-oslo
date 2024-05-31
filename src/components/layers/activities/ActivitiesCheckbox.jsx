import { useContext, useEffect, useState } from "react";
import React from "react";
import { BaseMapContext } from "../../../views/MapView";
import { ActivitiesLayer } from "./ActivitiesLayer";

export function ActivitiesCheckbox() {
  const { map, setFeatureLayers, featureLayers } = useContext(BaseMapContext);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (checked) {
      map.addLayer(ActivitiesLayer);
      setFeatureLayers([...featureLayers, ActivitiesLayer]);
    } else {
      map.removeLayer(ActivitiesLayer);
      setFeatureLayers(
        featureLayers.filter((layer) => layer !== ActivitiesLayer),
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
        Activities
      </label>
    </div>
  );
}
