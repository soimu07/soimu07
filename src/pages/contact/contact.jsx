import React, { useState, useEffect } from "react";
import style from "./contact.scss";
import classNames from "classnames";

const Contact = ({ history }) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [time, setTime] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    const startTimer = setInterval(
      () => {
        setTime(`${new Date().getHours()}:${new Date().getMinutes()}`);
      },
      time ? 1000 : 0
    );
    startTimer;
    // return clearInterval(startTimer);
  }, [time]);

  //   let date = new Date();
  //   let hour = date.getHours();
  //   setTime(hour);
  //   console.log(time);

  const validateEmail = () => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  };
  const validateName = () => {
    if (name.length >= 3) {
      return true;
    }
    return false;
  };

  const validateMessage = () => {
    if (message.length > 10) {
      return true;
    }
    return false;
  };

  const validate = () => {
    const isValidName = validateName();
    const isValidEmail = validateEmail();
    const isValidMessage = validateMessage();

    if (!isValidName) {
      setNameError(true);
    }
    if (!isValidMessage) {
      setMessageError(true);
    }

    if (!isValidEmail) {
      setEmailError(true);
    }

    if (isValidEmail && isValidMessage && isValidName) {
      setShowFeedback(true);
    }
  };
  const changePage = (newPage) => {
    history.push(newPage);
  };

  return (
    <div className={style.contactContainer}>
      <div className={style.textContainer}>
        <h1 className={style.contactUs}>Contact Us</h1>
        <h3 className={style.contactDescription}>
          We'll answer to you as fast as we can.
        </h3>
      </div>
      <div className={style.statusContainer}>
        <h3 className={style.statusText}>Status</h3>
        {time >= [17] ? (
          <h2 className={style.status}>We'll open tomorow at 08:00</h2>
        ) : (
          ""
        )}
        {time >= [0.8] ? (
          <h2 className={style.status}>We're open till 17:00</h2>
        ) : (
          ""
        )}

        <h2 className={style.status}>Time: {time}</h2>
        <p className={style.description}>Let us know how can we help!</p>
      </div>
      <div
        className={classNames(style.messageSent, {
          [style.messageSentVisible]: showFeedback,
        })}
      >
        Thank you for contacting us. <br />
        We'll answer to you shortly.
        <button
          onClick={() => changePage("/")}
          onKeyDown={() => changePage("/")}
          className={style.sendButton}
        >
          Home page
        </button>
      </div>
      <div
        className={classNames(style.contactFormContainer, {
          [style.feedback]: showFeedback,
        })}
      >
        <div className={style.row}>
          <div className={style.collum}>
            <h2 className={style.formName}>Name</h2>
            <input
              onClick={() => setNameError(false)}
              onKeyDown={() => setNameError(false)}
              className={classNames(style.nameInput, {
                [style.required]: nameError,
              })}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setNameError(false);
              }}
              type="text"
              id="fname"
              placeholder="Your name..."
              required
            ></input>
            {nameError ? (
              <p className={style.errorMessage}>*Min 3 characters</p>
            ) : (
              ""
            )}
          </div>
          <div className={style.collum}>
            <h2 className={style.formEmail}>E-mail</h2>
            <input
              onClick={() => setEmailError(false)}
              onKeyDown={() => setEmailError(false)}
              className={classNames(style.emailInput, {
                [style.required]: emailError,
              })}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError(false);
              }}
              type="email"
              id="email"
              placeholder="Your e-mail..."
              required
            ></input>
            {emailError ? (
              <p className={style.errorMessage}>*Invalid E-mail</p>
            ) : (
              ""
            )}
          </div>
        </div>
        <h2 className={style.formMessage}>How can we help?</h2>
        <textarea
          onClick={() => setMessageError(false)}
          onKeyDown={() => setMessageError(false)}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            setMessageError(false);
          }}
          className={classNames(style.messageInput, {
            [style.required]: messageError,
          })}
          required
        ></textarea>
        {messageError ? (
          <p className={style.tenCharacters}>*Min 10 characters</p>
        ) : (
          ""
        )}
        <button onClick={() => validate()} className={style.sendButton}>
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Contact;
