import React from "react";
import styles from "./package-content.scss";
import Button from "../button";

const PackageContent = ({ buttonText, onButtonClick }) => {
  return (
    <div className={styles.packageContentContainer}>
      <div className={styles.btnClassName}>
        <Button text={buttonText} onClick={onButtonClick} />
      </div>
    </div>
  );
};

export default PackageContent;
