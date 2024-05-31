import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";

import { GeoJSON } from "ol/format";
import { Icon, Style } from "ol/style";

export const CafeLayer = new VectorLayer({
  className: "name",
  source: new VectorSource({
    url: "./json/cafe.json",
    format: new GeoJSON(),
  }),
  style: new Style({
    image: new Icon({
      src: "public/images/kafePin_4.svg",
      scale: 1,
    }),
  }),
});
