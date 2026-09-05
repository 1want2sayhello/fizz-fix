import React, { useState, useContext, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/graphics/fizz-fix-logo.png";
import Hamburger from "./Mobile/Hamburger";
import CartIcon from "../../assets/icons/cart-icon.png";
import styles from "./Navbar.module.scss";
import { CartContext } from "../../context/CartContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useContext(CartContext);

  const mobileMenuRef = useRef(null);
  const hamburgerWrapperRef = useRef(null);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    if (!isMenuOpen) return;

    const firstLink = mobileMenuRef.current?.querySelector("a");
    firstLink?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);

        requestAnimationFrame(() => {
          hamburgerWrapperRef.current?.querySelector("button")?.focus();
        });
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);
  return (
    <nav className={styles.mainNav} aria-label="Primary navigation">
      <Link className={styles.navLogo} to="/">
        <img src={Logo} alt="Fizz Fix home" />
      </Link>

      <div className={styles.navLinks}>
        <ul className={styles.navLeft}>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/whyus">Why Us</Link>
          </li>
          <li>
            <Link to="/locations">Locations</Link>
          </li>
        </ul>

        <ul className={styles.navRight}>
          <li>
            <Link className={styles.pillBtn} to="/order">
              Order Now
            </Link>
          </li>
          <li className={styles.cartNav}>
            <Link
              to="/cart"
              aria-label={cartCount > 0 ? `Cart, ${cartCount} items` : "Cart"}
              className={styles.cartNav}
            >
              <img src={CartIcon} alt="" aria-hidden="true" />
              {cartCount > 0 && (
                <span className={styles.cartCount}>{cartCount}</span>
              )}
            </Link>
          </li>
        </ul>
      </div>

      <div className={styles.hamburgerWrapper} ref={hamburgerWrapperRef}>
        <Hamburger
          isOpen={isMenuOpen}
          toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>

      {isMenuOpen && (
        <div
          className={styles.mobileMenu}
          aria-label="Mobile navigation"
          ref={mobileMenuRef}
        >
          <Link to="/menu" onClick={closeMenu}>
            Menu
          </Link>
          <Link to="/whyus" onClick={closeMenu}>
            Why Us
          </Link>
          <Link to="/locations" onClick={closeMenu}>
            Locations
          </Link>
          <Link to="/order" onClick={closeMenu}>
            Order Now
          </Link>
          <Link to="/cart" onClick={closeMenu}>
            Cart ({cartCount})
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
