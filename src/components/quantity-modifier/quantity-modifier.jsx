import React from "react";
import { addItemToCart } from "../../actions/shopping-cart.action";
import { removeOneFromCart } from "../../actions/shopping-cart.action";
import { useDispatch, useSelector } from "react-redux";
import styles from "./quantity-modifier.scss";

const QuantityModifier = ({ productId }) => {
  const dispatch = useDispatch();
  const shoppingCartState = useSelector((state) => state.shoppingCart);
  const productState = shoppingCartState[productId];

  return (
    <div className={styles.basketQuantityModifier}>
      <button
        className={styles.toCartQuantity}
        disabled={productState === undefined || productState === 0}
        onClick={() => dispatch(removeOneFromCart(productId))}
      >
        -
      </button>
      <div className={styles.productsInCart}>
        {productState !== undefined ? productState : 0}
      </div>
      <button
        className={styles.toCartQuantity}
        onClick={() => dispatch(addItemToCart(productId))}
      >
        +
      </button>
    </div>
  );
};

export default QuantityModifier;
