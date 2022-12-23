import React, { useState, useEffect } from "react";
import GetServices from "../../Services/GetServices";

import Card from "../Card/Card";

export default function SliderFunc(props) {
  const { english, transcription, russian, tags } = props;

  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);

  //2.Вызвали эту обработку в usEffect
  useEffect(() => {
    getData();
  }, []);

  //1. Обработали метод класса и поместили результат запроса в состояние
  async function getData() {
    const result = await GetServices.getWord();
    setData(result);
  }

  // 3.проверили что бы состояние был true и не было ошибки
  if (!data) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="slider__container">
      <h1>Игра</h1>
      <div>
        <button>Влево</button>
        <Card />
        <button>Вправо</button>
      </div>
    </div>
  );
}
