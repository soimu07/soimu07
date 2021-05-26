import React from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import styles from "./filter-categories.scss";
import { PRODUCTS_CATEGORIES } from "../../content";
import { setCategoryFilter } from "../../actions/filter.actions";
import { deleteCategoryFilter } from "../../actions/filter.actions";

const FilterCategories = () => {
  const dispatch = useDispatch();
  const productsCategories = Object.values(PRODUCTS_CATEGORIES);
  const categoryState = useSelector((state) => state.filter.categoryName);
  return (
    <div>
      <ul className={styles.filterContainer}>
        <h2 className={styles.filterTitle}>Categories</h2>
        <div className={styles.listContainer}>
          {productsCategories.map((category) => (
            <div
              key={category}
              className={classNames(styles.listItemContainer, {
                [styles.selectedItem]:
                  categoryState.length &&
                  categoryState.find((e) => e === category) !== undefined,
              })}
            >
              <li
                className={classNames(styles.listItems, {
                  [styles.selectedItemText]:
                    categoryState.length &&
                    categoryState.find((e) => e === category) !== undefined,
                })}
                onClick={() => dispatch(setCategoryFilter(category))}
                onKeyDown={() => dispatch(setCategoryFilter(category))}
              >
                {category}
              </li>
              <button
                disabled={
                  categoryState.length &&
                  categoryState.find((e) => e === category) === undefined
                }
                onClick={() => dispatch(deleteCategoryFilter(category))}
                onKeyDown={() => dispatch(deleteCategoryFilter(category))}
                className={classNames(styles.deleteFilterButton, {
                  [styles.buttonDeleteVisible]:
                    categoryState.length &&
                    categoryState.find((e) => e === category) !== undefined,
                })}
              >
                x
              </button>
            </div>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default FilterCategories;
