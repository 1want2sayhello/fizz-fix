import React from "react";
import LocationsHero from "../../../../assets/images/wide-view-location.jpg";
import HiringImg from "../../../../assets/images/hiring.png";
import styles from "./LocationBento.module.scss";

const LocationBento = () => {
  return (
    <div className={styles.bentoContent}>
      <div className={`${styles.bento} ${styles.bentoHero}`}>
        <img src={LocationsHero} alt="Fizz Fix store interior" />
      </div>

      <div className={`${styles.bento} ${styles.tall}`}>
        <img
          src={HiringImg}
          alt="Fizz Fix employee"
          className={styles.hiring}
        />
        <div className={styles.content}>
          <h3>We're Hiring</h3>
          <p>Contact Your Local Location & Ask About Job Opportunities!</p>
        </div>
      </div>

      <div className={`${styles.bento} ${styles.box1}`}>
        <h3>10 Locations & Growing</h3>
      </div>

      <div className={`${styles.bento} ${styles.box2}`}>
        <div className={styles.stars} aria-hidden="true">
          <i className={`fa-solid fa-star fa-lg ${styles.checked}`}></i>
          <i className={`fa-solid fa-star fa-lg ${styles.checked}`}></i>
          <i className={`fa-solid fa-star fa-lg ${styles.checked}`}></i>
          <i className={`fa-solid fa-star fa-lg ${styles.checked}`}></i>
          <i className={`fa-regular fa-star fa-lg ${styles.unchecked}`}></i>
        </div>

        <div className={styles.tagline}>
          <h3>4.3 Average on Google & Yelp</h3>
        </div>
      </div>

      <div className={`${styles.bento} ${styles.box3}`}>
        <h3>
          <span>475,000+</span> Customers Served
        </h3>
      </div>
    </div>
  );
};

export default LocationBento;
