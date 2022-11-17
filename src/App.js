import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
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
  {
    id: "12975",
    english: "time",
    transcription: "[taɪm]",
    russian: "время",
    tags: "na",
    tags_json: '["na"]',
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

      <Footer></Footer>
    </div>
  );
}

export default App;
