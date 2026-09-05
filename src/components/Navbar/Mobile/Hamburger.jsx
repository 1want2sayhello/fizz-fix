import React from "react";
import styles from "./Hamburger.module.scss";

const Hamburger = ({ isOpen, toggleMenu }) => {
  return (
    <button
      className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
      onClick={toggleMenu}
      type="button"
      aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      aria-expanded={isOpen}
    >
      <span className={styles.patty}></span>
      <span className={styles.patty}></span>
      <span className={styles.patty}></span>
    </button>
  );
};

export default Hamburger;
