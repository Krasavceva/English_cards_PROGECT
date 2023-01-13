import React, { useState, useEffect, useRef } from "react";
import styles from "../Card/card.module.scss";
import { motion } from "framer-motion";

export default function Card({ item, handleChange, pressed }) {
  const [word, setWords] = useState({});
  const focusRef = useRef();

  useEffect(() => {
    focusRef.current.focus();
    setWords(item);
  }, [item]);

  if (!word) {
    return <h1 className="h1">КОНЕЦ ИГРЫ</h1>;
  }

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
        {pressed ? (
          <div ref={focusRef} className={styles.russian}>
            {word.russian}{" "}
          </div>
        ) : (
          <motion.button
            className={styles.btn}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
            onClick={handleChange}
            ref={focusRef}
          >
            Проверить
          </motion.button>
        )}
      </div>
    </motion.div>
  );
}
