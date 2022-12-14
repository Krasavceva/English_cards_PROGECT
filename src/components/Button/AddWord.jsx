import React from "react";

import styles from "../Button/addWord.module.scss";

function onClick() {
  return <input type="text" value="name" name="Hello" />;
}

const AddWord = () => {
  return (
    <div onClick={onClick} className={styles.btn}>
      Добавить слово
    </div>
  );
};

export default AddWord;
