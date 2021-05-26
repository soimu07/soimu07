import React from "react";
import PropTypes from "prop-types";
import styles from "./menu-desktop.scss";

const MenuDesktop = ({ history }) => {
  const changePage = (newPage) => {
    history.push(newPage);
  };

  return (
    <div className={styles.headerDesktopContainer}>
      <div
        className={styles.logo}
        onClick={() => changePage("./")}
        onKeyDown={() => changePage("/")}
        role="presentation"
      >
        Logo
      </div>
      <ul className={styles.menuItems}>
        <li
          className={styles.item}
          onClick={() => changePage("/products")}
          onKeyDown={() => changePage("/products")}
        >
          Products
        </li>
        <li
          className={styles.item}
          onClick={() => changePage("/contact")}
          onKeyDown={() => changePage("/contact")}
        >
          Contact
        </li>
      </ul>
    </div>
  );
};

MenuDesktop.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default MenuDesktop;
