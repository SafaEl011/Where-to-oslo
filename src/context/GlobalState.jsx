import { Map, Overlay, View } from "ol";
import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";
import { useGeographic } from "ol/proj";
import React, {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";
import { defaults, ScaleLine } from "ol/control";
import { Layer } from "ol/layer";
import SearchEngine from "../components/search/SearchEngine";
import {BarsCheckbox} from "../components/layers/bars/BarsCheckbox";
import {ActivitiesCheckbox} from "../components/layers/activities/ActivitiesCheckbox";
// import { useLayer } from "../components/features/useLayer";
import { ActivitiesLayer } from "../components/layers/activities/ActivitiesLayer";
import { BarsLayer } from "../components/layers/bars/BarsLayer";

useGeographic();

// Set the rules for what is displayed in the return part of the application.
// Base for most of the other inputs.
export const map = new Map({
    view: new View({
        center: [10.75, 59.915],
        zoom: 15,
    }),
    controls: defaults().extend([new ScaleLine()]),
});


const initialState = sessionStorage.getItem("mapBox") !== null ? {
  // ...JSON.parse(sessionStorage.getItem("mapBox")),
  // map: map
} : {} 
export const GlobalStateContext =  createContext(initialState)


export const GlobalStateProvider = ({children}) => {
    const mapRef = useRef();
  const overlayRef = useRef(null);
    const [activitiesChecked, setActivitiesChecked] = useState(false);
    const [barsChecked, setBarsChecked] = useState(false);
    const [activeFeature, setActiveFeature] = useState(null);
    const [baseLayer, setBaseLayer] = useState(
        new TileLayer({ source: new OSM() })
    );
    const overlay = new Overlay({});
    const [layers, setLayers] = useState([baseLayer]);
    const [featureLayers, setFeatureLayers] = useState([]);
    // useLayer(ActivitiesLayer, activitiesChecked);
    // console.log(activitiesChecked)


    const [globalState, setGlobalState] = useState({
            map,
            activitiesChecked: activitiesChecked ,
            barsChecked: barsChecked ,
            activeFeature: activeFeature,
            featureLayers: featureLayers,
            ActivitiesLayer: ActivitiesLayer,
            setActiveFeature: setActiveFeature,
            setFeatureLayers: setFeatureLayers,
            // setActivitiesChecked: setActivitiesChecked,
            toggleActivity,
            setBaseLayer,
            mapRef: mapRef
            // addFeatureLayer
    });



  /** @typedef {'activitiesChecked' | 'barsChecked' } Activity */
    /**
 * Toggles the activity  
/**@param {{ activity: boolean; activityType: Activity }} */
    function toggleActivity({activity, activityType} ) {
            const LayerFromSwitch = getLayer(activityType)
            if(activity){

                map?.on("click", (e) => handleActivityClick(e, activityType));
                map.addLayer(LayerFromSwitch);
            }else {
                    map.removeLayer(LayerFromSwitch)
                    map?.un("click", (e) => handleActivityClick(e, activityType));
            }
            setGlobalState((prevState) => {
                return {
                    ...globalState,
                    [activityType]: activity,
                    featureLayers: globalState.featureLayers.filter((layer) => layer !== LayerFromSwitch)
                }
            })
    }
   function changeActiveFeature(changes){
             setGlobalState((prevState) => {
                return {
                    ...globalState,
                    ...changes

                }
            })
   }

  useEffect(() => {
    if (activitiesChecked) {
    } else {
    }
    updateState()
  }, [activitiesChecked]);
  // This is for session storage // TODO
  const updateState = () =>{
    // const jsonObj = {};
    // jsonObj.circular = jsonObj;
    // const stateToSave = globalState
    // stateToSave.map = ""
    // sessionStorage.setItem("mapBox", JSON.stringify(stateToSave))
  }


    useEffect(() => {
        map.setLayers(layers);
    }, [layers]);

    // const mapRef = useRef();

    useEffect(() => {
        map.setTarget(mapRef.current);
    }, []);
    useEffect(()=>{
    },[activitiesChecked])



 const getLayer =(activityType) => {
  switch(true){
    case activityType === "activitiesChecked":
      return  ActivitiesLayer
    case activityType === "barsChecked":
      return  BarsLayer
    default:
        return  ActivitiesLayer
  }
  }

 function handleActivityClick(e, activityType)  {
    // const resolution = map.getView().getResolution(); //resolution or position
  // alert("you clicked med")
  console.log("Hello")
  const LayerFromSwitch = getLayer(activityType)
    const features = [];
    map.forEachFeatureAtPixel(e.pixel, (f) => {
        console.log("hit")
        const featureToPush = f
        featureToPush.position = {
            x: e.pixel[0],
              y: e.pixel[1]
        }
        console.log("insited")
        console.log("features")
        return features.push(featureToPush)
    }, {
      hitTolerance: 5,
      layerFilter: (l) => l === LayerFromSwitch,
    });
    console.log(features)
    if (features.length === 1) {
      const clickedFeature = features[0];
      
      changeActiveFeature( {
        activeFeature: {
        geometry: clickedFeature.getGeometry(),
        name: clickedFeature.get("name"),
        description: clickedFeature.get("description"),
        position: clickedFeature.position
        }

      }
      )
      // setActiveFeature({
      //   geometry: clickedFeature.getGeometry(),
      //   name: clickedFeature.get("name"),
      //   description: clickedFeature.get("description"),
      //   position: clickedFeature.position

      // });
      if (overlayRef.current) {
        overlay.setPosition(e.coordinate);
      }
    } else {
changeActiveFeature({
  activeFeature: null
})
      setActiveFeature(null);
      if (overlayRef.current) {
        overlay.setPosition(undefined);
      }}
}

    return (
        <GlobalStateContext.Provider
            value={{globalState, setGlobalState}}
        >
            {children}
            {/* </div> */}

        </GlobalStateContext.Provider>
    );
};