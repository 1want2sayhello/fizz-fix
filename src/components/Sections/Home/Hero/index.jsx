import React from "react";
import HeroVideo from "../../../../assets/videos/soda-hero.mp4";
import { Link } from "react-router-dom";
import styles from "./HomeHero.module.scss";

const HomeHero = () => {
  return (
    <section className={styles.hero} aria-labelledby="home-hero-title">
      <div className={styles.videoOverlay} aria-hidden="true"></div>

      <div className={styles.heroVideo} aria-hidden="true">
        <video playsInline autoPlay loop muted>
          <source src={HeroVideo} type="video/mp4" />
        </video>
      </div>

      <div className={styles.heroContent}>
        <div className={styles.heroTitle}>
          <div className={styles.mainTitle}>
            <div className={styles.estTag} aria-hidden="true">
              <span>Est</span>
              <span>2018</span>
            </div>

            <h1 id="home-hero-title" className={styles.stackedText}>
              <span className={styles.topText}>Fizz Fix</span>
              <span className={styles.shadow} aria-hidden="true">
                Fizz Fix
              </span>
            </h1>
          </div>

          <p>Handcrafted Sodas & Delicious Treats</p>
        </div>

        <div className={styles.ctaSection}>
          <Link to="/menu" className={styles.primaryCTA}>
            <span>View Menu</span>
          </Link>

          <Link to="/locations" className={`${styles.secondaryCTA} glass`}>
            <span>View Locations</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
