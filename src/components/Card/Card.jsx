import React from "react";
import { useState } from "react";
import styles from "../Card/card.module.scss";

export default function Card(props) {
  const { english, transcription, russian } = props;
  const [isTranslate, setIsTranslate] = useState(false);

  function onClick() {
    setIsTranslate(!isTranslate);
  }

  return (
    <div className={styles.card__container}>
      <div className={styles.card}>
        <p className={styles.english}>{english}</p>
        <p className={styles.transcription}>{transcription}</p>
        {isTranslate ? (
          <div className={styles.russian} onClick={onClick}>
            {russian}
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
