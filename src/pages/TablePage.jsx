import React from "react";
import Row from "../components/RowTable/Row";
import styles from "../styles/tablePage.module.scss";
import Words from "../Services/words.json";
import AddWord from "../components/Button/AddWord";

export default function Table() {
  return (
    <div className={styles.wrapper}>
      <h1> Vocabulary</h1>
      <div className={styles.row}>
        <div className={styles.title}>CЛОВО</div>
        <div className={styles.title}>ТРАНСКРИПЦИЯ</div>
        <div className={styles.title}>ПЕРЕВОД</div>
        <div className={styles.title}>ТЕГИ</div>
        <div className={styles.title}>РЕДАКТИРОВАНИЕ</div>
      </div>

      {Words.map((word, index) => (
        <Row key={index} {...word} />
      ))}
      <AddWord />
    </div>
  );
}
