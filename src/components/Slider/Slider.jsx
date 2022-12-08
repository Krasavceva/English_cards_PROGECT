import React, { PureComponent } from "react";
import Card from "../Card/Card";
import styles from "./Slider.module.scss";

import arrowLeft from "../../assets/images/arrow-left.png";
import arrowRight from "../../assets/images/arrow-right.png";
import done from "../../assets/images/done.png";

export default class Slider extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      words: [],
      currentIndex: 0,
    };
  }

  //загружаем данные с сервера
  async componentDidMount() {
    const response = await fetch("http://itgirlschool.justmakeit.ru/api/words");
    const result = await response.json();
    //получаем весь массив целиком
    this.setState({
      words: result,
    });
  }

  onNextClick = () => {
    let { currentIndex } = this.state;
    let nextIndex = currentIndex + 1;
    this.setState({ currentIndex: nextIndex, pressed: false });
  };

  onPrevClick = () => {
    this.setState({
      currentIndex: this.state.currentIndex - 1,
      pressed: false,
    });
  };
  setPressed = () => {
    this.setState({ pressed: true });
  };

  render() {
    //достаем массив
    let { words, currentIndex } = this.state;
    let card = words[currentIndex];

    if (currentIndex === words.length) {
      return <img className={styles.img__done} src={done} />;
    }

    if (card) {
      return (
        <div className={styles.slider__container}>
          <h1>Game</h1>
          <div className={styles.gallery}>
            <button>
              <img
                src={arrowLeft}
                alt="back"
                className={styles.img__back}
                onClick={this.onPrevClick}
              />
            </button>
            <Card
              english={card.english}
              transcription={card.transcription}
              translation={card.russian}
            />

            <button>
              <img
                src={arrowRight}
                alt="next"
                className={styles.img__next}
                onClick={this.onNextClick}
              />
            </button>
          </div>
          <div className={styles.wordslist__index}>
            {currentIndex + "/" + words.length}
          </div>
        </div>
      );
    }
    return "Загрузка";
  }
}
