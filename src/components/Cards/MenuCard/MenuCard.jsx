import { useEffect, useRef, useState } from "react";
import styles from "./MenuCard.module.scss";

const MenuCard = ({ item, onAddToCart }) => {
  const [isAdded, setIsAdded] = useState(false);
  const [isCustomizeHovered, setIsCustomizeHovered] = useState(false);
  const addedTimeoutRef = useRef(null);

  const { image, name, price, description, calories, notes } = item;

  const handleAddToCart = () => {
    onAddToCart(item);
    setIsAdded(true);
    clearTimeout(addedTimeoutRef.current);
    addedTimeoutRef.current = setTimeout(() => setIsAdded(false), 1800);
  };

  useEffect(() => () => clearTimeout(addedTimeoutRef.current), []);

  return (
    <article className={styles.menuCard}>
      <div className={styles.featuredImg}>
        <img src={image} alt={name} />
      </div>

      <div className={styles.cardBody}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.calories}>{calories} Cal</p>

        {notes?.length > 0 && (
          <p className={styles.notes}>{notes.join(" · ")}</p>
        )}

        <div className={styles.featuredDescription}>
          <p>{description}</p>
        </div>

        <p className={styles.price}>${Number(price).toFixed(2)}</p>

        <div className={styles.btnWrapper}>
          <button
            type="button"
            className={styles.btn}
            onClick={handleAddToCart}
          >
            <span>{isAdded ? "Added!" : "Order Now"}</span>
          </button>

          <span className={styles.srOnly} aria-live="polite">
            {isAdded ? `${name} added to cart` : ""}
          </span>

          <button
            type="button"
            className={`${styles.btn} ${styles.secondaryBtn}`}
            onMouseEnter={() => setIsCustomizeHovered(true)}
            onMouseLeave={() => setIsCustomizeHovered(false)}
            aria-disabled="true"
            onClick={(event) => event.preventDefault()}
          >
            <span>{isCustomizeHovered ? "Coming Soon" : "Customize"}</span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default MenuCard;
