import React, { useState } from "react";
import classNames from "classnames";
import styles from "./slide-show.scss";
import Parabolica from "../../img/Parabolica.jpg";
import cascaCiuperca from "../../img/cascaCiuperca.jpg";
import TestPNG from "../../img/TestPNG.png";

const MAX_IMAGES = 5;

const SlideShow = () => {
  let images = [
    Parabolica,
    cascaCiuperca,
    TestPNG,
    Parabolica,
    cascaCiuperca,
    TestPNG,
    Parabolica,
  ];
  const [index, setIndex] = useState(0);
  const [startingPoint, setStartingPoint] = useState(0);
  const [endPoint, setEndPoint] = useState(MAX_IMAGES);
  const visibleImages = images.slice(startingPoint, endPoint);

  const previous = () => {
    const newIndex = index - 1;
    if (startingPoint === 0 && newIndex === -1) return;
    if (newIndex === -1) {
      showPreviousSection();
    } else {
      setIndex(newIndex);
    }
  };

  const next = () => {
    const newIndex = index + 1;
    if (visibleImages.length < MAX_IMAGES && newIndex === visibleImages.length)
      return;
    if (newIndex === MAX_IMAGES) {
      showNextSection();
    } else {
      setIndex(newIndex);
    }
  };

  const previewImages = visibleImages.map((e, imgIndex) => (
    <div
      key={imgIndex}
      className={styles.previewImageContainer}
      onClick={() => {
        setIndex(imgIndex);
      }}
    >
      <img
        src={e}
        className={classNames(styles.previewImage, {
          [styles.selectedImage]: index === imgIndex,
        })}
      />
    </div>
  ));

  const showNextSection = () => {
    setStartingPoint(startingPoint + MAX_IMAGES);
    setEndPoint(endPoint + MAX_IMAGES);
    setIndex(0);
  };

  const showPreviousSection = () => {
    setStartingPoint(startingPoint - MAX_IMAGES);
    setEndPoint(endPoint - MAX_IMAGES);
    setIndex(MAX_IMAGES - 1);
  };

  return (
    <div className={styles.container}>
      <section className={styles.slideShowContainer}>
        <div
          className={classNames(styles.arrow, styles.arrowPrev)}
          onClick={() => previous()}
        ></div>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={visibleImages[index]}
            alt="img preview"
          />
        </div>
        <div
          className={classNames(styles.arrow, styles.arrowNext)}
          onClick={() => next()}
        ></div>
      </section>
      <section className={styles.slideShowPreviewContainer}>
        <button
          className={classNames(styles.button, styles.buttonPrevious)}
          disabled={startingPoint === 0}
          onClick={() => showPreviousSection()}
        ></button>
        <div className={styles.center}>{previewImages}</div>
        <button
          className={classNames(styles.button, styles.buttonNext)}
          disabled={startingPoint + MAX_IMAGES >= images.length}
          onClick={() => showNextSection()}
        ></button>
      </section>
    </div>
  );
};

export default SlideShow;
