import { Feature } from "ol";
import { Point } from "ol/geom";
import { Style, Icon } from "ol/style";
import { FeatureLike } from "ol/Feature";

export interface drinkProperties {
  name: string;
  description: string;
  image: string;
}
export type drinkStyle = {
  getproperties(): drinkProperties;
} & Feature<Point>;
export const drinkStyle = (feature: FeatureLike, description: string) => {
  const drinks = feature.getProperties() as drinkProperties;
  let imageSrc = "/Where-to-oslo/images/drinkPin_4.svg"; // Default image source

  if (drinks.description === "Bar") {
    imageSrc = "/Where-to-oslo/images/beerPin.svg"; // Set image source for Bar description
  } else if (drinks.description === "Drink") {
    imageSrc = "/Where-to-oslo/drinkPin.png";
  }
  return new Style({
    image: new Icon({
      src: imageSrc,
      anchor: [0.5, 1],
      scale: 0.5,
    }),
  });
};
export const activeDrinkStyle = (description: string): Style => {
  let imageSrc = "/Where-to-oslo/drinkPin.png"; // Default image source

  if (description === "Bar") {
    imageSrc = "/Where-to-oslo/images/beerPin.svg"; // Set image source for Bar description
  } else if (description === "Drink") {
    imageSrc = "/Where-to-oslo/drinkPin.png";
  }

  //const resolution = map.getView().getResolutions();
  return new Style({
    image: new Icon({
      src: imageSrc,
      anchor: [0.5, 1],
      scale: 0.03, // Adjust scale value here
    }),
  });
};
