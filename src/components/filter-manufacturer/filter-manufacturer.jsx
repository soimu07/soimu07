import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MANUFACTURER_CATEGORIES } from "../../content";
import classNames from "classnames";
import styles from "./filter-manufacturer.scss";
import { setManufacturerFilter } from "../../actions/filter.actions";
import { deleteManufacturerFilter } from "../../actions/filter.actions";

const FilterManufacturer = () => {
  const dispatch = useDispatch();
  const manufacturerCategories = Object.values(MANUFACTURER_CATEGORIES);
  const manufacturerState = useSelector((state) => state.filter.manufacturer);

  return (
    <div>
      <ul className={styles.filterContainer}>
        <h2 className={styles.filterTitle}>Manufacturers</h2>
        <div className={styles.listContainer}>
          {manufacturerCategories.map((manufacturer) => (
            <div
              key={manufacturer}
              className={classNames(styles.listItemContainer, {
                [styles.selectedItem]:
                  manufacturerState.length &&
                  manufacturerState.find((e) => e === manufacturer) !==
                    undefined,
              })}
            >
              <li
                className={classNames(styles.listItems, {
                  [styles.selectedItemText]:
                    manufacturerState.length &&
                    manufacturerState.find((e) => e === manufacturer) !==
                      undefined,
                })}
                onClick={() => dispatch(setManufacturerFilter(manufacturer))}
                onKeyDown={() => dispatch(setManufacturerFilter(manufacturer))}
              >
                {manufacturer}
              </li>
              <button
                disabled={
                  manufacturerState.length &&
                  manufacturerState.find((e) => e === manufacturer) ===
                    undefined
                }
                onClick={() => dispatch(deleteManufacturerFilter(manufacturer))}
                onKeyDown={() =>
                  dispatch(deleteManufacturerFilter(manufacturer))
                }
                className={classNames(styles.deleteFilterButton, {
                  [styles.buttonDeleteVisible]:
                    manufacturerState.length &&
                    manufacturerState.find((e) => e === manufacturer) !==
                      undefined,
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

export default FilterManufacturer;
