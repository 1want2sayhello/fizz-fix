import { Link } from "react-router-dom";
import styles from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <section className={styles.notFound}>
      <span className={styles.errorCode} aria-hidden="true">
        404
      </span>

      <h1>Oops! Your Fizz Went Flat.</h1>

      <p>We couldn't find the page you're looking for.</p>
      <p>Try navigating back to the homepage.</p>

      <Link className={styles.homeLink} to="/">
        Back to Home
      </Link>
    </section>
  );
};

export default NotFound;
