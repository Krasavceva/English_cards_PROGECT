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
    this.setState({
      currentIndex: nextIndex,
    });
  };

  //условие,чтобы картинки перелистывались по кругу
  //     let { currentIndex, words } = this.state;
  //     let nextIndex = currentIndex + 1;

  //     // if (nextIndex === words.length) {
  //     //   nextIndex = 0;
  //     // }

  //     this.setState({
  //       currentIndex: nextIndex,
  //     });
  //   };

  onPrevClick = () => {
    this.setState({
      currentIndex:
        this.state.currentIndex === 0
          ? this.state.words.length - 1
          : this.state.currentIndex - 1,
    });
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
            <button className={styles.btn}>
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

            <button className={styles.btn}>
              <img
                src={arrowRight}
                alt="next"
                className={styles.img__next}
                onClick={this.onNextClick}
              />
            </button>
          </div>
          <div className={styles.wordslist__index}>
            {currentIndex + 1 + "/" + words.length}
          </div>
        </div>
      );
    }
    return "Загрузка";
  }
}
