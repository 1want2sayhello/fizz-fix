import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../../../Utils/Search/SearchBar";
import { stateLocations } from "../../../../data/Locations";
import LocationCard from "../../../Cards/LocationCard/LocationCard";
import Mapbox from "../../../Utils/Mapbox/Mapbox";
import styles from "./LocationMap.module.scss";

const LocationMap = () => {
  const [searchParams] = useSearchParams();
  const linkedLocationId = searchParams.get("location");

  const allLocations = useMemo(() => {
    return stateLocations.flatMap((state) => state.data);
  }, []);

  const [selectedLocation, setSelectedLocation] = useState(
    allLocations.find((location) => location.id === linkedLocationId) ??
      allLocations[0] ??
      null,
  );

  useEffect(() => {
    if (!linkedLocationId) return;

    requestAnimationFrame(() => {
      document.getElementById("location-map")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }, [linkedLocationId]);

  if (allLocations.length === 0) {
    return (
      <section className={styles.map} id="location-map">
        <div className={styles.locationsHeader}>
          <h2>Locations Unavailable</h2>
          <p>
            We couldn't load our locations right now. Please try again later.
          </p>
        </div>
      </section>
    );
  }

  return (
    <div className={styles.map} id="location-map">
      <div className={styles.mapContainer}>
        <Mapbox selectedLocation={selectedLocation} />
      </div>

      <div className={styles.scrollContainer}>
        <div className={styles.locationsHeader}>
          <h2>Find Your Nearest Fix</h2>
          <p>Choose a location to order pickup or delivery</p>
        </div>

        <div className={styles.locationScroll}>
          <div className={styles.searchBox}>
            <SearchBar
              locations={allLocations}
              selectedLocation={selectedLocation}
              setSelectedLocation={setSelectedLocation}
            />
          </div>

          {allLocations.map((location) => (
            <LocationCard
              key={location.id}
              location={location}
              onSelect={() => setSelectedLocation(location)}
              isSelected={selectedLocation?.id === location.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationMap;
