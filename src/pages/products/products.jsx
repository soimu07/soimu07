import React, { useState, useContext } from "react";
import styles from "./products.scss";
import FilterManufacturer from "../../components/filter-manufacturer";
import FilterCategories from "../../components/filter-categories";
import ProductOverview from "../../components/product-overview";
import ResponsiveContext from "../../context/responsive.context";

const Products = () => {
  const { isAtLeastTablet } = useContext(ResponsiveContext);
  const [isVisible, setIsVisible] = useState(false);

  const checkIfVisible = () =>
    isVisible ? setIsVisible(false) : setIsVisible(true);

  return (
    <div className={styles.cont}>
      <h1 className={styles.sort} onClick={() => checkIfVisible()}>
        Sort by
      </h1>
      <div className={styles.productsContainer}>
        <div className={styles.filtersContainer}>
          {isAtLeastTablet || isVisible ? <FilterCategories /> : null}
          {isAtLeastTablet || isVisible ? <FilterManufacturer /> : null}
        </div>
        <div className={styles.productsDisplay}>
          <ProductOverview />
        </div>
      </div>
    </div>
  );
};

export default Products;
