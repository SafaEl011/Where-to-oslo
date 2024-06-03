import React, { useContext, useEffect, useRef, useState } from "react";
// import { BaseMap } from "../../../views/MapView";
import classNames from "classnames"
import { ActivitiesLayer } from "./ActivitiesLayer";
// import { useLayer } from "../../features/useLayer";
import { Overlay } from "ol";
import {GlobalStateContext}  from "../../../context/GlobalState";

const InfoBox  = ({position, ...feature}) => {
  const boxStyles = {
    left: `${position.x + 20}px`,
    top: `${position.y - 200}px` ,
    zIndex: "10000"
  }
  return <div 
          style={{...boxStyles}}
          className={classNames(
          "absolute  p-4 sm:p-6 lg:p-8",
       "z-40"
        )}
  
  
  >
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">          {feature?.name}</div>
    <div className="font-bold text-xl mb-2">          {feature?.description}</div>
    <p className="text-gray-700 text-base">
          Noe mer info
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#latter</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span> */}
  </div>
</div>
  </div>

}



export function ActivitiesCheckbox() {
  const {globalState}  = useContext(GlobalStateContext);
  const { setActivitiesChecked, activitiesChecked, toggleActivity, map, activeFeature, toggleFeatureLayers  } = globalState 
  return (
      <div className="relative">
        {/* <label>
          <input
              type="checkbox"
              checked={activitiesChecked}
              onChange={(e) => {
                toggleActivity(!activitiesChecked)
              }}
          />
          Activities
        </label> */}
        {activeFeature && (
            <div  >
            <InfoBox position={activeFeature.position} {...activeFeature}/>
            </div>
        )}
      </div>
  );
}
