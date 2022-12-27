import React, { useState, useEffect } from "react";
import styles from "../Card/card.module.scss";

export default function Card({ item }) {
  const [isTranslate, setIsTranslate] = useState(false);
  const [word, setWords] = useState({});

  useEffect(() => {
    setWords(item);
  }, [item]);

  if (!word) {
    return <h1>Loading...</h1>;
  }

  function onClick() {
    setIsTranslate(!isTranslate);
  }

  return (
    <div className={styles.card__container}>
      <div className={styles.card}>
        <p className={styles.english}>{word.english}</p>
        <p className={styles.transcription}>{word.transcription}</p>
        {isTranslate ? (
          <div className={styles.russian} onClick={onClick}>
            {word.russian}
          </div>
        ) : (
          <button className={styles.btn} onClick={onClick}>
            Проверить
          </button>
        )}
      </div>
    </div>
  );
}
