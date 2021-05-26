import React from "react";
import PropTypes from "prop-types";
import styles from "./button.scss";

const Button = ({ text, onClick }) => {
  return (
    <button className={styles.btnClassName} onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  text: "Click here",
  onClick: () => {},
};

export default Button;
