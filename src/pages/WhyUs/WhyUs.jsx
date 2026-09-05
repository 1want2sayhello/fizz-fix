import React from "react";
import aboutHero from "../../assets/images/about-us-hero.png";
import bottleLogo from "../../assets/graphics/fizz-fix-bottle-logo.png";
import indianaIcon from "../../assets/icons/indiana-icon.svg";
import michiganIcon from "../../assets/icons/michigan-icon.svg";
import ohioIcon from "../../assets/icons/ohio-icon.svg";
import styles from "./WhyUs.module.scss";

const WhyUs = () => {
  return (
    <div className={styles.whyUs}>
      <section className={styles.whyUsHero}>
        <div className={styles.heroOverlay}></div>
        <img src={aboutHero} alt="Fizz Fix soda shop" />

        <div className={styles.logoOverlay}>
          <img src={bottleLogo} alt="" />
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.contentHeader}>
          <h1>Why Fizz Fix?</h1>
        </div>

        <div className={styles.aboutUs}>
          <div className={styles.aboutUsHeader}>
            <h2>
              Say No to <br />a Boring Soda Routine
            </h2>
          </div>

          <div className={styles.aboutUsText}>
            <p>
              Since 2018, we have strived to combat the ordinary soda experience
              by introducing a wide variety of different flavors to enhance your
              typical soda into something special.
            </p>
          </div>
        </div>

        <div className={styles.missionStatement}>
          <div className={styles.missionImg}></div>

          <div className={styles.statement}>
            <h2>
              <span>Our Mission</span> <br />
              is to fix the way you Experience Soda.
            </h2>

            <p>
              Fizz Fix started in Indianapolis with a simple idea: soda could be
              better. Not more complicated — just better. At the time, most
              quick drink stops felt rushed, generic, or inconsistent, and the
              experience rarely matched the hype. We saw an opportunity to
              rethink how soda was made, customized, and served down to the last
              detail.
            </p>
          </div>
        </div>

        <div className={styles.locationsServed}>
          <h2>We’re Now Proudly in Three States Across the Midwest.</h2>

          <div className={styles.stateIcons}>
            <img src={indianaIcon} alt="" />
            <img src={ohioIcon} alt="" />
            <img src={michiganIcon} alt="" />
          </div>
        </div>

        <form className={styles.emailForm}>
          <h2>Keep Up to Date With the Latest Fix</h2>

          <div className={styles.inputWrapper}>
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>

            <input
              id="newsletter-email"
              name="email"
              className={styles.emailInput}
              type="email"
              autoComplete="email"
              placeholder="Enter your email..."
              required
            />

            <button className={styles.submit} type="submit">
              Join Our Newsletter
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default WhyUs;
