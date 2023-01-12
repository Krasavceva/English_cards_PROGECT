import React, { useState, useEffect, useRef } from "react";
import GetServices from "../Services/GetServices";
import Card from "../components/Card/Card";
import styles from "../styles/gamePage.module.scss";

export default function SliderFunc() {
  const [posts, setPosts] = useState([]);
  const [index, setIndex] = useState(0);
  const [pressed, setPressed] = useState(false);
  const [counter, setCounter] = useState(0);

  //2.Вызвали эту обработку в usEffect
  useEffect(() => {
    getWord();
  }, []);

  //1. Обработали метод класса и поместили результат запроса в состояние
  async function getWord() {
    const data = await GetServices.getWord();
    setPosts(data);
  }

  function handlePrevClick() {
    let result = index;
    if (result--) {
      setIndex(result);
    } else {
      setIndex = 0;
    }
  }

  function handleNextClick() {
    let result = index;
    result++;
    setIndex(result);
    setPressed(false);
  }

  const handleChange = () => {
    setPressed(true);
    handleCount();
  };

  const handleCount = () => {
    setCounter(counter + 1);
  };

  return (
    <div className={styles.slider__container}>
      <h1>GAME</h1>

      <div className={styles.gallery}>
        <button onClick={handlePrevClick}>PREV</button>
        <Card
          item={posts[index]}
          pressed={pressed}
          handleChange={handleChange}
          count={handleCount}
        />
        <button onClick={handleNextClick}>NEXT</button>
      </div>
      <div className={styles.counter}>{counter + "/" + posts.length}</div>
    </div>
  );
}
