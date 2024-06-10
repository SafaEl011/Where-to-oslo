import React, {
  MutableRefObject,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { GeoJSON } from "ol/format";
import { MapBrowserEvent, Overlay } from "ol";
import { FeatureLike } from "ol/Feature";
import { MainContext } from "../../map/MainContext";

import { activeStoreStyle, storeStyle } from "./StoreStyle";

const storeLayer = new VectorLayer({
  className: "Store",
  source: new VectorSource({
    url: "/WhereToOslo/json/store.geojson",
    format: new GeoJSON(),
  }),
  style: storeStyle,
});

export function StoreButton() {
  const [clicked, setClicked] = useState(false);
  const [activeFeature, setActiveFeature] = useState<storeStyle | undefined>();
  const { setStoreFeatureLayers, map } = useContext(MainContext);

  const overlay = useMemo(() => new Overlay({}), []);
  const overlayRef = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    overlay.setElement(overlayRef.current);
    map.addOverlay(overlay);
    return () => {
      map.removeOverlay(overlay);
    };
  }, [overlay, map]);

  function handlePointerMove(e: MapBrowserEvent<MouseEvent>) {
    const features: FeatureLike[] = [];
    map.forEachFeatureAtPixel(e.pixel, (f) => features.push(f), {
      hitTolerance: 5,
      layerFilter: (l) => l === storeLayer,
    });
    if (features.length === 1) {
      setActiveFeature(features[0] as storeStyle);
      overlay.setPosition(e.coordinate);
    } else {
      setActiveFeature(undefined);
      overlay.setPosition(undefined);
    }
  }

  useEffect(() => {
    activeFeature?.setStyle(activeStoreStyle);
    return () => activeFeature?.setStyle(undefined);
  }, [activeFeature]);

  useEffect(() => {
    if (clicked) {
      setStoreFeatureLayers((old: any) => [...old, storeLayer]);
      map?.on("click", handlePointerMove);
    } else {
      setStoreFeatureLayers((old: any) =>
        old.filter((l: any) => l !== storeLayer),
      );
      map?.un("click", handlePointerMove);
    }
  }, [clicked, setStoreFeatureLayers, map]);

  return (
      <div>
        <button
            className={`btn ${clicked ? "btn-success" : "btn-primary"}`}
            onClick={() => setClicked((prevClicked) => !prevClicked)}
        >
          Store
        </button>
        <div ref={overlayRef} className={"pinOverlay"}>
          {activeFeature && (
              <>
                <p>Navn: {activeFeature.get("name")}</p>
              </>
          )}
        </div>
      </div>
  );
}
