import React, { useEffect } from "react";
import bubbles from "../../../assets/graphics/loading-bubbles.png";
import styles from "./OrderProcessing.module.scss";

const OrderProcessing = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 4500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={styles.orderProcessing}
      role="status"
      aria-live="polite"
      aria-label="Your order is processing"
    >
      <div className={styles.processingContent}>
        <div className={styles.cupContainer}>
          <div className={styles.bubbles} aria-hidden="true">
            <img src={bubbles} alt="" aria-hidden="true" />
          </div>
          <div className={styles.cup} aria-hidden="true">
            <div className={styles.cupFill}></div>
          </div>
        </div>

        <h1>Sending Your Order...</h1>

        <p> Hold tight. Your fix is on the way.</p>
      </div>
    </div>
  );
};

export default OrderProcessing;
