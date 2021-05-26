import React, { useState } from "react";
import styles from "./game.scss";
import classNames from "classnames";

const Game = () => {
  const [dice, setDice] = useState(0);
  const [roundScore0, setRoundScore0] = useState(0);
  const [roundScore1, setRoundScore1] = useState(0);
  const [globalScore0, setGlobalScore0] = useState(0);
  const [globalScore1, setGlobalScore1] = useState(0);
  const [activePlayer, setActivePlayer] = useState(0);
  const [winner, setWinner] = useState(null);

  const rollDice = () => {
    const newDiceValue = Math.floor(Math.random() * 6 + 1);
    setDice(newDiceValue);
    if (newDiceValue === 1) {
      activePlayer === 0 ? setRoundScore0(0) : setRoundScore1(0);
      setActivePlayer(activePlayer === 0 ? 1 : 0);
      setDice(0);
    } else {
      activePlayer === 0
        ? setRoundScore0(newDiceValue + roundScore0)
        : setRoundScore1(newDiceValue + roundScore1);
    }
  };

  const holdRoundScore = () => {
    if (activePlayer === 0) {
      setGlobalScore0(globalScore0 + roundScore0);
      if (globalScore0 + roundScore0 >= 10) {
        setWinner(0);
      } else {
        setRoundScore0(0);
        setDice(0);
        setActivePlayer(1);
      }
    } else {
      setGlobalScore1(globalScore1 + roundScore1);
      if (globalScore1 + roundScore1 >= 10) {
        setWinner(1);
      } else {
        setRoundScore1(0);
        setDice(0);
        setActivePlayer(0);
      }
    }
  };

  const newGame = () => {
    setWinner(null);
    setDice(0);
    setRoundScore0(0);
    setRoundScore1(0);
    setGlobalScore0(0);
    setGlobalScore1(0);
    setActivePlayer(0);
  };

  const getClasses = (index) => {
    return classNames(styles.playerContainer, {
      [styles.active]: activePlayer === index,
    });
  };

  return (
    <div className={styles.gameContainer}>
      <div className={styles.newGame} onClick={() => newGame()}>
        new game
      </div>
      <div className={styles.players}>
        <section className={getClasses(0)}>
          <h1>player1</h1>
          {winner !== null && winner === 0 && (
            <h2 className={styles.winner}>winner</h2>
          )}

          <div className={styles.p0globalScore}>
            total score: <br />
            <span className={styles.scoreFont}>{globalScore0}</span>
          </div>
          <div className={styles.p0roundScore}>
            round score: <br />
            <span className={styles.scoreFont}>{roundScore0}</span>
          </div>
        </section>

        <section className={getClasses(1)}>
          <h1>player2</h1>
          {winner !== null && winner === 1 && (
            <h2 className={styles.winner}>winner</h2>
          )}
          <div className={styles.p1globalScore}>
            total score: <br />
            <span className={styles.scoreFont}>{globalScore1}</span>
          </div>
          <div className={styles.p1roundScore}>
            round score: <br />
            <span className={styles.scoreFont}>{roundScore1}</span>
          </div>
        </section>
      </div>
      <div className={styles.buttonsContainer}>
        <div className={styles.diceRoll}>{dice}</div>

        <button
          disabled={winner !== null}
          className={styles.roll}
          onClick={() => rollDice()}
        >
          roll dice
        </button>
        <button
          disabled={winner !== null}
          className={styles.hold}
          onClick={() => holdRoundScore()}
        >
          hold
        </button>
      </div>
    </div>
  );
};

export default Game;
