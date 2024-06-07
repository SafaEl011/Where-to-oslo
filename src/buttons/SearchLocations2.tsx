import React, { useState, useEffect, useContext, ChangeEvent } from "react";
import { MainContext } from "../map/MainContext";
import SearchButton from "./SearchButton";

export interface SearchJson {
  properties: SearchProperties;
  geometry: {
    type: "Point";
    coordinates: number[];
  };
  source: string;
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
        { file: "json/activity.geojson", source: "activity" },
        { file: "json/restaurants.geojson", source: "restaurants" },
        { file: "json/drinks.geojson", source: "drinks" },
        { file: "json/store.geojson", source: "store" },
        { file: "json/cafe.geojson", source: "cafe" },
      ];
      const data = await Promise.all(
        files.map((fileObj) =>
          fetch(fileObj.file)
            .then((response) => response.json())
            .then((json) =>
              json.features.map((feature: SearchJson) => ({
                ...feature,
                source: fileObj.source,
              })),
            ),
        ),
      );

      const mergedFeatures = data.flat();
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
        zoom: 19,
      });
    }
  };

  const colorMapping: { [key: string]: string } = {
    activity: `#FDD430FF`,
    restaurants: `#0096B1FF`,
    drinks: `#E76E23FF`,
    store: `#975294FF`,
    cafe: `#985B3FFF`,
    trip: `#00BE62FF`,
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
                color: colorMapping[s.source],
                fontWeight: "bold",
              }}
            >
              {s.properties.name}
            </div>
          ))}
      </div>
    </div>
  );
}
