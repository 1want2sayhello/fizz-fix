import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import RewardsHero from "../../assets/images/rewards-hero.png";
import TrashIcon from "../../assets/icons/trash-icon.png";
import styles from "./Cart.module.scss";

const generateOrderNumber = () => {
  return `FF-${Date.now().toString().slice(-6)}`;
};

const Cart = () => {
  const navigate = useNavigate();
  const { cart, dispatch } = useContext(CartContext);

  const handleRemoveItem = (item) => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: item.lineId,
    });
  };

  const handleIncreaseQty = (item) => {
    dispatch({
      type: "UPDATE_QTY",
      payload: {
        lineId: item.lineId,
        amount: 1,
      },
    });
  };

  const handleReduceQty = (item) => {
    dispatch({
      type: "UPDATE_QTY",
      payload: {
        lineId: item.lineId,
        amount: -1,
      },
    });
  };

  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };
  const taxRate = 0.07;

  const cartTotal = cart.reduce(
    (total, item) => total + Number(item.price) * item.quantity,
    0,
  );

  const taxAmount = cartTotal * taxRate;
  const orderTotal = cartTotal + taxAmount;

  const handlePlaceOrder = () => {
    const orderNumber = generateOrderNumber();

    sessionStorage.setItem(
      "fizz-fix-last-order",
      JSON.stringify({
        items: cart,
        total: orderTotal,
        orderNumber,
      }),
    );

    clearCart();
    navigate("/order-confirmation");
  };

  return (
    <section className={styles.cart}>
      <div className={styles.cartHeader}>
        <h1>Your Order</h1>

        <div className={styles.clearCartContainer}>
          <button
            type="button"
            className={styles.clearCartBtn}
            onClick={clearCart}
          >
            Clear Cart
          </button>
        </div>
      </div>

      {cart.length === 0 ? (
        <div className={styles.emptyCart}>
          <h2>
            Hey There! <br /> Your Cart's Empty.
          </h2>

          <p className={styles.message}>
            Looks like you're fizz-less. Let's Fix That!
          </p>

          <Link to="/order">
            <span className={styles.orderLink}>Order Now</span>
          </Link>
        </div>
      ) : (
        <div className={styles.cartContainer}>
          <ul className={styles.cartList}>
            {cart.map((item) => {
              const unitPrice = Number(item.price);
              const lineTotal = unitPrice * item.quantity;

              return (
                <li key={item.lineId} className={styles.cartItem}>
                  <div className={styles.itemImg}>
                    <img src={item.image} alt={item.name} />
                  </div>

                  <div className={styles.itemInfo}>
                    <div className={styles.itemMain}>
                      <h2>{item.name}</h2>

                      {item.calories && (
                        <p className={styles.itemCalories}>
                          {item.calories} Cal
                        </p>
                      )}
                    </div>

                    <div className={styles.unitPrice}>
                      <span>Each</span>
                      <strong>${unitPrice.toFixed(2)}</strong>
                    </div>

                    <div className={styles.quantityControl}>
                      <div className={styles.quantityButtons}>
                        <button
                          type="button"
                          onClick={() => handleReduceQty(item)}
                        >
                          <span aria-hidden="true">−</span>
                          <span className="sr-only">
                            Decrease quantity of {item.name}
                          </span>
                        </button>

                        <span
                          className={styles.quantityValue}
                          aria-live="polite"
                        >
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() => handleIncreaseQty(item)}
                        >
                          <span aria-hidden="true">+</span>
                          <span className="sr-only">
                            Increase quantity of {item.name}
                          </span>
                        </button>
                      </div>
                    </div>

                    <div className={styles.lineTotal}>
                      <span> Item Total</span>
                      <strong>${lineTotal.toFixed(2)}</strong>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleRemoveItem(item)}
                      className={styles.deleteIcon}
                    >
                      <img src={TrashIcon} alt="" aria-hidden="true" />

                      <span className="sr-only">
                        Remove {item.name} from cart
                      </span>
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>

          <aside
            className={styles.checkout}
            aria-labelledby="order-summary-heading"
          >
            <div className={styles.rewards}>
              <div className={styles.rewardsImg}>
                <img src={RewardsHero} alt="Fizz Fix rewards" />
              </div>

              <div className={styles.couponInput}>
                <label htmlFor="coupon-code" className="sr-only">
                  Coupon code
                </label>

                <input
                  id="coupon-code"
                  name="coupon"
                  type="text"
                  autoComplete="off"
                  placeholder="Have a coupon? Enter here.."
                />
              </div>
            </div>

            <div className={styles.orderSummary}>
              <h2 id="order-summary-heading">Order Summary</h2>

              {cart.map((item) => (
                <div key={item.lineId} className={styles.orderList}>
                  <p>{item.name}</p>
                  <p>Qty: {item.quantity}</p>
                  <p>${(Number(item.price) * item.quantity).toFixed(2)}</p>
                </div>
              ))}

              <div className={styles.orderTotal}>
                <span> Subtotal: ${cartTotal.toFixed(2)}</span>
                <span>Tax: ${taxAmount.toFixed(2)}</span>

                <strong className={styles.total}>
                  Total: ${orderTotal.toFixed(2)}
                </strong>
              </div>
            </div>

            <div className={styles.btnContainer}>
              <button
                className={styles.checkoutBtn}
                type="button"
                onClick={handlePlaceOrder}
              >
                Place Order
              </button>
            </div>
          </aside>
        </div>
      )}
    </section>
  );
};

export default Cart;
