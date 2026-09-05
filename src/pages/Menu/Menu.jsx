import React, { useContext } from "react";
import { HashLink } from "react-router-hash-link";
import { CartContext } from "../../context/CartContext";
import MenuCard from "../../components/Cards/MenuCard/MenuCard";
import { menuCategories } from "../../data/Menu/index";
import styles from "./Menu.module.scss";

const Menu = () => {
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
    <div className={styles.menu}>
      <h1 className="sr-only">Fizz Fix Menu</h1>
      <div className={styles.bubbleBorder}></div>

      <nav aria-label="Menu categories">
        <ul className={styles.menuNav}>
          <li>
            {" "}
            <HashLink smooth to="/menu#featured">
              {" "}
              Featured{" "}
            </HashLink>{" "}
          </li>
          <li>
            <HashLink smooth to="/menu#dirty-sodas">
              {" "}
              Dirty Sodas{" "}
            </HashLink>{" "}
          </li>
          <li>
            {" "}
            <HashLink smooth to="/menu#fixers">
              Fixers
            </HashLink>{" "}
          </li>
          <li>
            {" "}
            <HashLink smooth to="/menu#ice-cream">
              {" "}
              Sundaes & Milkshakes{" "}
            </HashLink>{" "}
          </li>
          <li>
            {" "}
            <HashLink smooth to="/menu#desserts">
              {" "}
              Desserts
            </HashLink>{" "}
          </li>
          <li>
            {" "}
            <HashLink smooth to="/menu#seasonal">
              {" "}
              Seasonal{" "}
            </HashLink>{" "}
          </li>
        </ul>
      </nav>

      <section id="featured" className={styles.featured}>
        <h2 className={styles.featuredHeader}> Featured </h2>
        <div className={styles.featuredGrid}>
          {featuredDrinks.map((item) => (
            <MenuCard key={item.id} item={item} onAddToCart={handleAddtoCart} />
          ))}
        </div>
      </section>

      {menuCategories.map((category) => (
        <section key={category.id} id={category.id}>
          <div className={styles.sectionHeader}>
            <h2>{category.name}</h2>
          </div>

          <div className={styles.menuGrid}>
            {category.category.map((item) => (
              <MenuCard
                key={item.id}
                item={item}
                onAddToCart={handleAddtoCart}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Menu;
