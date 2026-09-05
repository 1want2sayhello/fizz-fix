import React from "react";
import { Link } from "react-router-dom";
import FizzFixCup from "../../../../assets/graphics/fizz-fix-cup-transparent.png";
import styles from "./HighlightSection.module.scss";

const HighlightSection = () => {
  return (
    <section className={styles.highlightSection}>
      <div className={styles.highlightWrapper}>
        <div className={styles.highlightPanel}>
          <h2>
            <span>Bold, Quality Soda.</span> <br />
            <span>Built Your Way.</span>
          </h2>

          <p>
            We believe at Fizz Fix that each drink should be crafted to our
            customer’s taste and perfection.
          </p>
          <p>Every. Single. Time.</p>
          <p>
            That’s why every time you order from us, we make sure and double
            check your choices & mix-ins to ensure a quality experience.
          </p>

          <Link to="/menu" className={styles.pillBtn}>
            View Menu
          </Link>
        </div>

        <div className={styles.highlightVisual}>
          <div className={styles.visualImg}>
            <img src={FizzFixCup} alt="fizz fix cola cup" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightSection;
