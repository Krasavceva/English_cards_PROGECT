import React, { useState, useEffect, useRef } from "react";
import styles from "../Card/card.module.scss";
import { motion } from "framer-motion";

export default function Card({
  item,
  handleChange,
  pressed,
  setPressed,
  arrId,
}) {
  const [word, setWords] = useState({});

  const focusRef = useRef();

  useEffect(() => {
    setWords(item);
    const copyId = arrId.filter((id) => id == item);
    if (copyId < 1) {
      setPressed(false);
    }
  }, [item]);

  useEffect(() => {
    if (focusRef.current) {
      focusRef.current.focus();
    }
  }, []);

  if (!word) {
    return <h1 className="h1">КОНЕЦ ИГРЫ</h1>;
  }

  if (pressed === true)
    return (
      <motion.div
        className={styles.card__container}
        animate={{
          scale: [1, 1.2, 1.2, 1, 1],
          rotate: [90, 0, 0],
        }}
        transition={{ duration: 1 }}
      >
        <div className={styles.card}>
          <h2 className={styles.english}>{word.english}</h2>
          <p className={styles.transcription}>{word.transcription}</p>
          <div className={styles.russian}>{word.russian} </div>
        </div>
      </motion.div>
    );

  if (pressed === false)
    return (
      <motion.div
        className={styles.card__container}
        animate={{
          scale: [1, 1.2, 1.2, 1, 1],
          rotate: [90, 0, 0],
        }}
        transition={{ duration: 1 }}
      >
        <div className={styles.card}>
          <p className={styles.english}>{word.english}</p>
          <p className={styles.transcription}>{word.transcription}</p>

          <motion.button
            className={styles.btn}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
            onClick={handleChange}
            ref={focusRef}
          >
            Проверить
          </motion.button>
        </div>
      </motion.div>
    );
}
