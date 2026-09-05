import React from "react";
import CustomersHero from "../../../../assets/images/customers.png";
import styles from "./BrandStory.module.scss";

const BrandStory = () => {
  return (
    <section className={styles.brandStory}>
      <div className={styles.brandHeader}>
        <h2 className={styles.stackedText}>
          <span className={styles.stackedHeader}>
            Fixed to <br /> Perfection
          </span>
          <span className={styles.stackedHeaderShadow}>
            Fixed to <br /> Perfection
          </span>
        </h2>
      </div>

      <div className={styles.brandText}>
        <p>
          We craft unapologetically <span> bold & customizable </span>
          soda combinations that <span>elevate refreshment and redefine </span>
          what a soft drink can be.
        </p>
      </div>

      <div className={styles.brandImage}>
        <img src={CustomersHero} alt="Customers enjoying drinks at Fizz Fix" />
      </div>
    </section>
  );
};

export default BrandStory;
