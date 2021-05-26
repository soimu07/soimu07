import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./menu-mobile.scss";

const MenuMobile = ({ history }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => {
    setIsOpen(!isOpen);
  };
  const classes = classNames(styles.menuItems, {
    [styles.visible]: isOpen === true,
  });
  const changePage = (newPage) => {
    setIsOpen(false);
    history.push(newPage);
  };

  return (
    <div className={styles.headerMobileContainer}>
      <div
        className={styles.logo}
        onClick={() => changePage("/")}
        onKeyDown={() => changePage("/")}
        role="presentation"
      >
        <img src="" alt="logo"></img>
      </div>
      <div
        className={styles.menuContainer}
        onClick={onClick}
        onKeyDown={onClick}
        role="presentation"
      >
        <div className={styles.menuToggle} />
        <div className={styles.menuToggle} />
        <div className={styles.menuToggle} />
      </div>
      <ul className={classes}>
        <li
          className={styles.listItemContainer}
          onClick={() => changePage("/products")}
          onKeyDown={() => changePage("/products")}
        >
          Products
        </li>
        <li
          className={styles.listItemContainer}
          onClick={() => changePage("/contact")}
          onKeyDown={() => changePage("/contact")}
        >
          Contact
        </li>
      </ul>
    </div>
  );
};

MenuMobile.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default MenuMobile;
