import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";

import { GeoJSON } from "ol/format";
import { Icon, Style } from "ol/style";

export const ShoppingLayer = new VectorLayer({
  className: "name",
  source: new VectorSource({
    url: "./json/store.json",
    format: new GeoJSON(),
  }),
  style: new Style({
    image: new Icon({
      src: "public/images/storePin_2.svg",
      scale: 1,
    }),
  }),
});
