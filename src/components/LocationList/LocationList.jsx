import React from "react";
import { Link } from "react-router-dom";
import { stateLocations } from "../../data/Locations/index";
import styles from "./LocationList.module.scss";

const LocationList = () => {
  return (
    <nav className={styles.locationList} aria-label="Footer locations">
      {stateLocations.map((state) => (
        <section key={state.name} className={styles.stateSection}>
          <h2> {state.name}</h2>
          <ul className={styles.locations}>
            {state.data.map((location) => (
              <li key={location.id}>
                <Link
                  to={`/locations?location=${encodeURIComponent(location.id)}#location-map`}
                >
                  {location.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </nav>
  );
};

export default LocationList;
