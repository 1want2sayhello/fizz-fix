import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./OrderConfirm.module.scss";

const OrderConfirm = () => {
  const headingRef = useRef(null);
  const order = JSON.parse(sessionStorage.getItem("fizz-fix-last-order"));

  useEffect(() => {
    headingRef.current?.focus();
  }, []);

  if (!order) {
    return (
      <section className={styles.confirmation}>
        <h1 ref={headingRef} tabIndex="-1">
          No Recent Order Found
        </h1>
        <Link to="/order">Back to Menu</Link>
      </section>
    );
  }

  return (
    <section className={styles.confirmationContainer}>
      <div className={styles.confirmation}>
        <h1 ref={headingRef} tabIndex="-1">
          Order Confirmed!
        </h1>

        <div className={styles.orderDetails}>
          <p>Thanks for ordering with Fizz Fix!</p>
          <span>Order #{order.orderNumber}</span>
          <span>Total: ${Number(order.total).toFixed(2)}</span>
        </div>

        <Link className={styles.orderLink} to="/">
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default OrderConfirm;
