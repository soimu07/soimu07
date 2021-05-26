import React, { useContext } from "react";
import styles from "./package.scss";
import classNames from "classnames";

const Package = ({ title, children, onSelect, active }) => {
  const classes = classNames(styles.titleContainer, {
    [styles.selected]: active,
  });
  return (
    <div className={styles.packageContainer}>
      <div className={classes} onClick={onSelect}>
        {title}
      </div>
      {active && <div className={styles.contentContainer}>{children}</div>}
    </div>
  );
};

export default Package;
