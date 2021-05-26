import React from "react";
import { useParams } from "react-router-dom";
import PRODUCTS_LIST from "../../content/products-list";
import styles from "./product.scss";
import QuantityModifier from "../../components/quantity-modifier";

const Product = () => {
  const { productId } = useParams();
  const product = PRODUCTS_LIST.find((p) => p.id === productId);
  return (
    <div className={styles.container}>
      <div className={styles.product}>
        <div className={styles.productDetailsContainer}>
          <p>Product number: {product.id}</p>
          <p>{product.title}</p>
          <p>Manufacturer: {product.manufacturer}</p>
          <p>{product.price}</p>
        </div>
        <div className={styles.imagesContainer}>{product.img}</div>
      </div>
      <div className={styles.buyBox}>
        <p>Price: {product.price}</p>
        <QuantityModifier productId={product.id} />
      </div>
    </div>
  );
};

export default Product;
