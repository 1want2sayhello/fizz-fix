import React from "react";
import { useSearchParams } from "react-router-dom";
import LocationMap from "../../components/Sections/Locations/Map";
import LocationBento from "../../components/Sections/Locations/Bento";
import styles from "./Locations.module.scss";

const Locations = () => {
  const [searchParams] = useSearchParams();
  const linkedLocationId = searchParams.get("location") ?? "default";

  return (
    <main className={styles.locations}>
      <h1 className="sr-only">Fizz Fix Locations</h1>
      <LocationMap key={linkedLocationId} />

      <section className={styles.locationContent}>
        <LocationBento />
      </section>
    </main>
  );
};

export default Locations;
