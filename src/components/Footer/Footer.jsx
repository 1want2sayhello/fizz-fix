import React from "react";
import FizzFixLogo from "../../assets/graphics/fizz-fix-logo.png";
import DoorDash from "../../assets/icons/doordash.png";
import UberEats from "../../assets/icons/ubereats.png";
import LocationList from "../LocationList/LocationList";
import styles from "./Footer.module.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.topContent}>
        <div className={styles.footerLogo}>
          <img src={FizzFixLogo} alt="Fizz Fix" />
          <h4> Handcrafted Sodas since 2018</h4>
        </div>
        <div className={styles.footerAbout}>
          <h4> Welcome to Fizz Fix. </h4>
          <p>
            Since 2018, Fizz Fix has been redefining the soda experience from
            our roots in Indianapolis. By combining bold flavors, creative
            customization, and attention to detail, we turn everyday sodas into
            something worth coming back for.
          </p>
        </div>
        <div className={styles.footerLocations}>
          <LocationList />
        </div>
      </div>

      <div className={styles.socials}>
        <div className={styles.delivery}>
          <a
            href="https://www.doordash.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Order Fizz Fix through DoorDash"
          >
            <img src={DoorDash} alt="DoorDash" />
          </a>

          <a
            href="https://www.ubereats.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Order Fizz Fix through Uber Eats"
          >
            <img src={UberEats} alt="Uber Eats" />
          </a>
        </div>

        <div className={styles.icons}>
          <h4> Connect With Us! </h4>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fizz Fix on Twitter"
          >
            <i className="fa-brands fa-twitter fa-lg" aria-hidden="true"></i>
          </a>

          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fizz Fix on TikTok"
          >
            <i className="fa-brands fa-tiktok fa-lg" aria-hidden="true"></i>
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fizz Fix on Instagram"
          >
            <i className="fa-brands fa-instagram fa-lg" aria-hidden="true"></i>
          </a>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>Fizz Fix &copy; copyright {currentYear} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
