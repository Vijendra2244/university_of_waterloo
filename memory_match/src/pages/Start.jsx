import React, { useState, useEffect } from "react";
import styles from "./Start.module.css";
import { useToast } from "@chakra-ui/react";

import cardBack from "../../src/assets/cardBlue.png";
import card1 from "../../src/assets/apple.png";
import card2 from "../../src/assets/AppleLatter.png";
import card3 from "../../src/assets/Orange.png";
import card4 from "../../src/assets/orangelatter.png";
import card5 from "../../src/assets/apple.png";
import card6 from "../../src/assets/AppleLatter.png";
import card7 from "../../src/assets/Orange.png";
import card8 from "../../src/assets/orangelatter.png";

function Start() {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [turns, setTurns] = useState(0);

  const toast = useToast();

  useEffect(() => {
    initializeGame();
  }, []);

  useEffect(() => {
    if (matchedCards.length === cards.length) {
      toast({
        title: "Congratulations!",
        description: "You won the game!",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    }
  }, [matchedCards, cards.length, toast]);

  const initializeGame = () => {
    const newCards = [
      { id: 1, src: card1 },
      { id: 2, src: card2 },
      { id: 3, src: card3 },
      { id: 4, src: card4 },
      { id: 5, src: card5 },
      { id: 6, src: card6 },
      { id: 7, src: card7 },
      { id: 8, src: card8 },
      { id: 9, src: card1 },
      { id: 10, src: card2 },
      { id: 11, src: card3 },
      { id: 12, src: card4 },
      { id: 13, src: card5 },
      { id: 14, src: card6 },
      { id: 15, src: card7 },
      { id: 16, src: card8 },
    ];
    setCards(shuffleArray(newCards));
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleCardClick = (card) => {
    if (flippedCards.length === 2 || matchedCards.includes(card.id)) return;

    setFlippedCards([...flippedCards, card]);

    if (flippedCards.length === 1) {
      setTurns(turns + 1);
      if (flippedCards[0].src === card.src) {
        setMatchedCards([...matchedCards, flippedCards[0].id, card.id]);
        setFlippedCards([]);
      } else {
        setTimeout(() => {
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  const isFlipped = (card) => {
    return flippedCards.includes(card) || matchedCards.includes(card.id);
  };

  const handleNewGame = () => {
    initializeGame();
    setTurns(0);
    setFlippedCards([]);
    setMatchedCards([]);
  };

  return (
    <div className={`${styles.memoryGame} ${styles.main}`}>
      <div className={styles.cards}>
        {cards.map((card) => (
          <img
            key={card.id}
            src={isFlipped(card) ? card.src : cardBack}
            alt=""
            className={`${styles.card} ${isFlipped(card) && styles.flip}`}
            onClick={() => handleCardClick(card)}
          />
        ))}
      </div>
      <div className={styles.info}>
        <p>Turns: {turns}</p>
        <button onClick={handleNewGame}>New Game</button>
      </div>
    </div>
  );
}

export default Start;
