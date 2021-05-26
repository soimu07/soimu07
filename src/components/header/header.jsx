import React from "react";
import MenuMobile from "../menu-mobile";
import MenuDesktop from "../menu-desktop";
import styles from "./header.scss";

const Header = () => (
  <div className={styles.container}>
    <MenuMobile />
    <MenuDesktop />
  </div>
);

export default Header;
