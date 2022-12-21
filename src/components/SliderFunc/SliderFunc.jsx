import React, { useState, useEffect } from "react";

import Card from "../Card/Card";

export default function SliderFunc(props) {
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
