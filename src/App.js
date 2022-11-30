import React from "react";
import "./App.css";
import * as classNames from "classnames";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import Button from "./components/Button/Button";
import Table from "./components/Table/Table";
import Footer from "./components/Footer/Footer";

const words = [
  {
    id: "12212",
    english: "animal ",
    transcription: "[ ˈæn.ɪ.məl ]",
    russian: "животное",
    tags: "животные",
    tags_json: '["u0436u0438u0432u043eu0442u043du044bu0435"]',
  },
  {
    id: "12516",
    english: "dog",
    transcription: "[dɒg]",
    russian: "собака",
    tags: "pets",
    tags_json: '["pets"]',
  },
  {
    id: "12974",
    english: " victory",
    transcription: "[ˈvɪktərɪ]",
    russian: "победа",
    tags: "",
    tags_json: '[""]',
  },
];

function App() {
  return (
    <div className="App">
      <Header></Header>

      <div className="body">
        {words.map((word) => (
          <Card
            english={word.english}
            transcription={word.transcription}
            russian={word.russian}
          ></Card>
        ))}
      </div>
      <Table />
      <Footer></Footer>
    </div>
  );
}

export default App;
