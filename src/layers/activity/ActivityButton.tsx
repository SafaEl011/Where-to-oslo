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

import { activeActivityStyle, activityStyle } from "./ActivityStyle";

const activityLayer = new VectorLayer({
  className: "Activity",
  source: new VectorSource({
    url: "/WhereToOslo/json/activity.geojson",
    format: new GeoJSON(),
  }),
  style: activityStyle,
});

export function ActivityButton() {
  const [clicked, setClicked] = useState(false);
  const [activeFeature, setActiveFeature] = useState<
    activityStyle | undefined
  >();
  const { setActivityFeatureLayers, map } = useContext(MainContext);

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
      layerFilter: (l) => l === activityLayer,
    });
    if (features.length === 1) {
      setActiveFeature(features[0] as activityStyle);
      overlay.setPosition(e.coordinate);
    } else {
      setActiveFeature(undefined);
      overlay.setPosition(undefined);
    }
  }

  useEffect(() => {
    activeFeature?.setStyle(activeActivityStyle);
    return () => activeFeature?.setStyle(undefined);
  }, [activeFeature]);

  useEffect(() => {
    if (clicked) {
      setActivityFeatureLayers((old: any) => [...old, activityLayer]);
      map?.on("click", handlePointerMove);
    } else {
      setActivityFeatureLayers((old: any) =>
        old.filter((l: any) => l !== activityLayer),
      );
      map?.un("click", handlePointerMove);
    }
  }, [clicked, setActivityFeatureLayers, map]);

  return (
    <div>
      <label>
        <input
          type="button"
          value="Activity"
          onClick={() => setClicked((prevClicked) => !prevClicked)}
        />
        {clicked ? "Hide" : "Show"} Activity
      </label>
      <div ref={overlayRef} className={"overlay"}>
        {activeFeature && (
          <>
            <p>Navn: {activeFeature.get("name")}</p>
          </>
        )}
      </div>
    </div>
  );
}
