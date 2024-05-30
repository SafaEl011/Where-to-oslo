import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";

import { GeoJSON } from "ol/format";
import { Fill, RegularShape, Stroke, Style } from "ol/style";


export const CafeLayer = new VectorLayer({
    className: "name",
    source: new VectorSource({
        url: "./json/cafe.json",
        format: new GeoJSON(),
    }),
    style: new Style({
        image: new RegularShape({
            stroke: new Stroke({ color: "white", width: 2 }),
            fill: new Fill({
                color: "rgb(103,177,250)",
            }),
            points: 3,
            angle: 0,
            radius: 12,
        }),
    }),
});
