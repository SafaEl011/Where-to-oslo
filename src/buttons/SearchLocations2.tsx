import React, { useState, useEffect, useContext, ChangeEvent } from "react";
import { MainContext } from "../map/MainContext";
import SearchButton from "./SearchButton";

export interface SearchJson {
  properties: SearchProperties;
  geometry: {
    type: "Point";
    coordinates: number[];
  };
}

export interface SearchProperties {
  name: string;
}

export function SearchLocations2({
  showOverlay,
  toggleOverlay,
}: {
  showOverlay: boolean;
  toggleOverlay: () => void;
}) {
  const [value, setValue] = useState("");
  const [searchQuery, setSearchQuery] = useState<string[]>([]);
  const [searchResults, setSearchResults] = useState<SearchJson[]>([]);

  const { map } = useContext(MainContext);

  useEffect(() => {
    const fetchFiles = async () => {
      const files = [
        "json/activity.geojson",
        "json/restaurants.geojson",
        "json/drinks.geojson",
        "json/store.geojson",
        "json/cafe.geojson",
      ];
      const data = await Promise.all(
        files.map((file) => fetch(file).then((response) => response.json())),
      );

      const mergedFeatures = data.flatMap(
        (datum: { features: SearchJson[] }) => datum.features,
      );
      const names = mergedFeatures.map(
        (feature: SearchJson) => feature.properties.name,
      );

      setSearchResults(mergedFeatures);
      setSearchQuery(names);
    };

    fetchFiles();
  }, []);
  const [showSearch, setShowSearch] = useState<boolean>(false);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const handleSearchToggle = () => {
    setShowSearch(!showSearch);
    toggleOverlay();
  };

  const onSelect = (f: SearchProperties) => {
    const selectedLocation = searchResults.find(
      (s) => s.properties.name === f.name,
    );
    if (selectedLocation) {
      setValue(selectedLocation.properties.name);
      map.getView().animate({
        center: selectedLocation.geometry.coordinates,
        zoom: 14,
      });
    }
  };

  return (
    <div className={` position-relative ${showOverlay ? "show" : ""}`}>
      <div className="button-container">
        <SearchButton onClick={() => toggleOverlay()} />
        <input className={""} type="text" value={value} onChange={onChange} />

        {searchResults
          .filter((s) => {
            const searchTerm = value.toLowerCase();
            const locationAddress = s.properties.name.toLowerCase();
            return searchTerm && locationAddress.startsWith(searchTerm);
          })
          .map((s, index) => (
            <div
              onClick={() => onSelect(s.properties)}
              className="dropdown-row"
              key={index}
              style={{
                cursor: "pointer",
                margin: "2px 0",
              }}
            >
              {s.properties.name}
            </div>
          ))}
      </div>
    </div>
  );
}
