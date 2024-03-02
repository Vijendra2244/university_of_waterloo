import React, { useState } from "react";
import pinkCard from "../../src/assets/cardPink.png";
import blueCard from "../../src/assets/cardBlue.png";
import styles from "./Start.module.css";
import apple from "../../src/assets/apple.png";
import orange from "../../src/assets/Orange.png";
import appleLetter from "../../src/assets/AppleLatter.png";
import orangeLatter from "../../src/assets/orangelatter.png";

function Start() {
  const [flippedCards, setFlippedCards] = useState([]);

  const handleCardClick = (index) => {
    if (flippedCards.length < 2 && !flippedCards.includes(index)) {
      setFlippedCards([...flippedCards, index]);
    }
  };

  const isFlipped = (index) => {
    return flippedCards.includes(index);
  };

  return (
    <>
      <div className={styles.main}>
        <div className={styles.blueCard}>
          {Array(6)
            .fill()
            .map((_, index) => (
              <img
                key={index}
                className={`${styles.img} ${
                  isFlipped(index) && styles.flipped
                }`}
                src={
                  isFlipped(index)
                    ? index % 2 === 0
                      ? apple
                      : orange
                    : pinkCard
                }
                alt=""
                onClick={() => handleCardClick(index)}
              />
            ))}
        </div>
        <div className={styles.blueCard}>
          {Array(6)
            .fill()
            .map((_, index) => (
              <img
                key={index}
                className={`${styles.img} ${
                  isFlipped(index) && styles.flipped
                }`}
                src={
                  isFlipped(index)
                    ? index % 2 === 0
                      ? appleLetter
                      : orangeLatter
                    : blueCard
                }
                alt=""
                onClick={() => handleCardClick(index)}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default Start;
