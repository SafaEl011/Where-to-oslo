// import { useContext, useEffect, useMemo, useState } from "react"


// import {BaseMap} from "../views/MapView";

// // The constraint <T extends Feature> ensures that only
// // types conforming to the Feature structure can be used with the function.
// export function useFeatures(layerPredicate) {
//     const { featureLayers, map } = useContext(BaseMap)


//     const layer = useMemo(() => featureLayers.find(layerPredicate), [
//         featureLayers,
//         layerPredicate
//     ])

//     // State management
//     const [features, setFeatures] = useState([])
//     const [activeFeatures, setActiveFeature] = useState()


//     // Event handler for pointermove
//     function handlePointermove(e) {
//         const features = layer?.getSource().getFeaturesAtCoordinate(e.coordinate)
//         setActiveFeature(features?.length === 1 ? features[0] : undefined)
//         console.log("hello")
//     }

//     // Event listeners and cleanup

//     useEffect(() => {
//         console.log("ran")
//         if (layer) {
//             map.on("pointermove", handlePointermove)
//         }
//         return () => {
//             map.un("pointermove", handlePointermove)
//         }
//     }, [map, layer])

//     return { features, activeFeatures, setActiveFeature }
// }
