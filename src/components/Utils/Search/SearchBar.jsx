import React, { useMemo } from "react";
import Select from "react-select";
import styles from "./SearchBar.module.scss";

const SearchBar = ({ locations, selectedLocation, setSelectedLocation }) => {
  const options = useMemo(() => {
    return locations.map((location) => ({
      value: location.id,
      label: `${location.address.street} ${location.address.city}, ${location.address.state} ${location.address.zip} | ${location.name}`,
      location,
    }));
  }, [locations]);

  const selectedOption = selectedLocation
    ? {
        value: selectedLocation.id,
        label: `${selectedLocation.address.street} ${selectedLocation.address.city}, ${selectedLocation.address.state} ${selectedLocation.address.zip} | ${selectedLocation.name}`,
        location: selectedLocation,
      }
    : null;

  const handleChange = (option) => {
    setSelectedLocation(option ? option.location : null);
  };

  const searchStyling = {
    control: (provided, state) => ({
      ...provided,
      width: "100%",
      borderColor: state.isFocused ? "#6c2313" : "black",
      boxShadow: "none",
      fontFamily: "Bayon, sans-serif",
      "&:hover": {
        borderColor: "#6c2313",
      },
    }),

    option: (provided, state) => ({
      ...provided,
      fontFamily: "Bayon, sans-serif",
      color: state.isSelected ? "white" : "black",
      backgroundColor: state.isSelected
        ? "#6c2313"
        : state.isFocused
          ? "#e9d4bd"
          : "white",
      cursor: "pointer",
    }),

    singleValue: (provided) => ({
      ...provided,
      fontFamily: "Bayon, sans-serif",
      color: "black",
    }),

    placeholder: (provided) => ({
      ...provided,
      fontFamily: "Bayon, sans-serif",
      color: "#5c4033",
    }),

    menu: (provided) => ({
      ...provided,
      overflow: "hidden",
    }),
  };
  return (
    <div className={styles.SearchBar}>
      <Select
        styles={searchStyling}
        options={options}
        value={selectedOption}
        onChange={handleChange}
        placeholder="Search locations..."
        isClearable
        classNamePrefix="locationSelect"
        aria-label="Search Fizz Fix locations"
      />
    </div>
  );
};

export default SearchBar;
