// import {useContext, useEffect} from "react";
// import {BaseMap} from "../../views/MapView";
// import {GlobalStateContext}  from "../../views/MapViewFinal";

// export function useLayer(layer, checked) {
//     // const { setFeatureLayers } = useContext(BaseMap)
//     // const { setFeatureLayers } = useContext(GlobalStateContext)

//     useEffect(() => {
//         if (checked) {
//             setFeatureLayers(old => [...old, layer])
//         }
//         return () => {
//             setFeatureLayers(old => old.filter(l => l !== layer))
//         }
//     }, [checked])
// }
