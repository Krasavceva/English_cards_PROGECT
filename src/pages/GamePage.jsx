import React, { useState, useEffect } from "react";
import GetServices from "../Services/GetServices";
import Card from "../components/Card/Card";
import styles from "../styles/gamePage.module.scss";

export default function SliderFunc() {
  const [posts, setPosts] = useState([]);
  const [index, setIndex] = useState(0);
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
  }

  const handleCount = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="slider__container">
      <h1>Игра</h1>
      <div className={styles.counter}>
        Вы изучили {counter}/ слов за тренировку
      </div>
      <div className={styles.gallery}>
        <button onClick={handlePrevClick}>Влево</button>
        <Card item={posts[index]} count={handleCount} />
        <button onClick={handleNextClick}>Вправо</button>
      </div>
    </div>
  );
}
