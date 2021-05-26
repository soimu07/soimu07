import React, { useState, useRef } from "react";
import styles from "./calculator.scss";

const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [previousDisplay, setPreviousDisplay] = useState("");
  const [clearDisplay, setClearDisplay] = useState(false);
  const [displayUpdated, setDisplayUpdated] = useState(false);
  const [operatorState, setOperatorState] = useState(null);
  const [preTotal, setPreTotal] = useState(null);
  const [equality, setEquality] = useState(false);
  const operatorEl = useRef(null);

  const onClick = (e) => {
    if (e === "." && display.includes(".")) {
      return;
    }
    if (previousDisplay) {
      if (clearDisplay) {
        setDisplay(e.toString());
        setClearDisplay(false);
        setDisplayUpdated(true);
        if (equality) {
          setPreviousDisplay("");
          setEquality(false);
          setPreTotal(null);
        }
      } else {
        setDisplay(`${display}${e}`);
        setDisplayUpdated(true);
      }
    } else {
      setDisplay((display === "0" ? "" : display) + e);
      setDisplayUpdated(true);
    }
  };
  const onOperatorClick = (operator) => {
    const isValidOperator = validateOperator(operator);

    if (equality) {
      setPreviousDisplay(`${display}${operator}`);
      setEquality(false);
      setClearDisplay(true);
      setDisplayUpdated(false);
      setOperatorState(operator);
    }
    if (displayUpdated && previousDisplay !== "" && !equality) {
      setPreviousDisplay(`${previousDisplay}${display}${operator}`);
      setDisplay(calculate(operatorState));
      setClearDisplay(true);
      setOperatorState(operator);
      setDisplayUpdated(false);
    }

    if (previousDisplay === "") {
      isValidOperator && setOperatorState(operator);
      setPreviousDisplay(`${display}${operator}`);
      setClearDisplay(true);
      setDisplayUpdated(false);
    } else {
      if (isValidOperator && !displayUpdated) {
        setPreviousDisplay(previousDisplay.replace(/.$/, `${operator}`));
        setClearDisplay(true);
        setOperatorState(operator);
      }
    }
  };

  const validateOperator = (operator) => {
    let isValid = true;
    if (
      previousDisplay.length &&
      previousDisplay.substring(previousDisplay.length - 1) === operator
    ) {
      isValid = false;
    }
    return isValid;
  };

  const clear = () => {
    setDisplay("0");
    setPreviousDisplay("");
    setClearDisplay(true);
    setPreTotal(null);
    setEquality(false);
    setOperatorState(null);
  };

  const erase = () => {
    if (display !== 0 && display.length > 1) {
      setDisplay(display.substring(0, display.length - 1));
    } else setDisplay("0");
  };

  const calculate = (op, nr) => {
    let total = 0;
    let firstNumber;
    if (nr) {
      firstNumber = nr;
    } else if (preTotal !== null) {
      firstNumber = preTotal;
    } else {
      firstNumber = previousDisplay;
    }

    switch (op) {
      case "+":
        total = parseFloat(firstNumber) + parseFloat(display);
        break;
      case "-":
        total = parseFloat(firstNumber) - parseFloat(display);
        break;
      case "*":
        total = parseFloat(firstNumber) * parseFloat(display);
        break;
      case "/":
        total = parseFloat(firstNumber) / parseFloat(display);
        break;
      default:
        total = null;
        break;
    }
    setPreTotal(total);
    return parseFloat(total).toFixed(2);
  };

  const equal = () => {
    if (previousDisplay && !equality) {
      setPreviousDisplay(`${previousDisplay}${display}=`);
      setDisplay(calculate(operatorState));
      setClearDisplay(true);
      setEquality(true);
      setPreTotal(calculate(operatorState));
    }
    if (equality) {
      let previousDisplaySplited = previousDisplay.split(operatorState);
      let lastNumber =
        previousDisplaySplited[previousDisplaySplited.length - 1];
      setPreviousDisplay(
        `${preTotal}${operatorState}${parseFloat(lastNumber).toFixed(1)}=`
      );
      setPreTotal(calculate(operatorState, lastNumber));
      setDisplay(calculate(operatorState, lastNumber));
      setEquality(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.display}>
        <h3 className={styles.previousDisplay}>{previousDisplay}</h3>
        <h2 className={styles.currentDisplay}>{display}</h2>
      </div>
      <div className={styles.buttonsContainer}>
        <div className={styles.row}>
          <button onClick={() => clear()}>C</button>
          <button className={styles.doubleWidth} onClick={() => erase()}>
            ⌫
          </button>
          <button onClick={() => onOperatorClick("/")}>/</button>
        </div>
        <div className={styles.row}>
          <button onClick={() => onClick(7)}>7</button>
          <button onClick={() => onClick(8)}>8</button>
          <button onClick={() => onClick(9)}>9</button>
          <button onClick={() => onOperatorClick("*")}>x</button>
        </div>
        <div className={styles.row}>
          <button onClick={() => onClick(4)}>4</button>
          <button onClick={() => onClick(5)}>5</button>
          <button onClick={() => onClick(6)}>6</button>
          <button onClick={() => onOperatorClick("-")}>-</button>
        </div>
        <div className={styles.row}>
          <button onClick={() => onClick(1)}>1</button>
          <button onClick={() => onClick(2)}>2</button>
          <button onClick={() => onClick(3)}>3</button>
          <button onClick={() => onOperatorClick("+")}>+</button>
        </div>
        <div className={styles.row}>
          <button onClick={() => onClick(0)}>0</button>
          <button onClick={() => onClick(".")}>.</button>
          <button
            ref={operatorEl}
            className={styles.doubleWidth}
            onClick={() => equal("=")}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
