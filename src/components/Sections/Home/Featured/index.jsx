import React, { useContext } from "react";
import { CartContext } from "../../../../context/CartContext";
import MenuCard from "../../../Cards/MenuCard/MenuCard";
import { menuCategories } from "../../../../data/Menu/index";
import styles from "./Featured.module.scss";

const Featured = () => {
  const menuItems = menuCategories.flatMap((cat) => cat.category);
  const featuredDrinks = menuItems.filter((item) => item.featured);

  const { dispatch } = useContext(CartContext);

  const handleAddtoCart = (item) => {
    dispatch({
      type: "ADD_ITEM",
      payload: item,
    });
  };
  return (
    <section className={styles.featuredDrinks}>
      <h2> Featured Drinks </h2>
      <div className={styles.featuredGrid}>
        {featuredDrinks.map((item) => (
          <MenuCard key={item.id} item={item} onAddToCart={handleAddtoCart} />
        ))}
      </div>
    </section>
  );
};

export default Featured;
