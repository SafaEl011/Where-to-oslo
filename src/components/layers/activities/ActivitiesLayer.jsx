import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";

import { GeoJSON } from "ol/format";
import { Icon, Style } from "ol/style";



export const ActivitiesLayer = new VectorLayer({
  className: "name",
  source: new VectorSource({
    url: "./json/activity.json",
    format: new GeoJSON(),
  }),
  style: new Style({
    image: new Icon({
      src: "public/images/activityPin_4.svg",
      scale: 1,
    }),
  }),
});

export const TextBoxTest = (coordinates) => {
  const Test = new VectorLayer({
  source: new VectorSource({
    url: "./json/activity.json",
    format: new GeoJSON(),
  }),
  })  
}