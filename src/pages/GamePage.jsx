import React, { useState, useEffect } from "react";
import GetServices from "../Services/GetServices";
import Card from "../components/Card/Card";

export default function SliderFunc() {
  const [posts, setPosts] = useState([]);
  const [index, setIndex] = useState(0);

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
    result--;
    setIndex(result);
  }

  function handleNextClick() {
    let result = index;
    result++;
    setIndex(result);
  }

  return (
    <div className="slider__container">
      <h1>Игра</h1>
      <div>
        <button onClick={handlePrevClick}>Влево</button>
        <Card item={posts[index]} />
        <button onClick={handleNextClick}>Вправо</button>
      </div>
    </div>
  );
}
