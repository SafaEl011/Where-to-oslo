import { useContext, useEffect, useState } from "react";
import React from "react";
// import {BaseMap} from "../../../views/MapView";
import {GlobalStateContext}  from "../../../context/GlobalState";
import { BarsLayer } from "./BarsLayer";

export function BarsCheckbox() {
  // const {map, setFeatureLayers, featureLayers } = useContext(BaseMap);
  const {globalState} = useContext(GlobalStateContext)
  const {map, setFeatureLayers, featureLayers } = globalState 
  // const [checked, setChecked] = useState(false);

  // useEffect(() => {
  //   if (checked) {
  //     map.addLayer(BarsLayer);
  //     setFeatureLayers([...featureLayers, BarsLayer]);
  //   } else {
  //     map.removeLayer(BarsLayer);
  //     setFeatureLayers(
  //         featureLayers.filter((layer) => layer !== BarsLayer),
  //     );
  //   }
  // }, [checked]);

  return (
    <div>
      {/* <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        Bars
      </label> */}
    </div>
  );
}
