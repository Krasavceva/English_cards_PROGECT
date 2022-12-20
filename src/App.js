import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import GamePage from "./pages/GamePage";
import Card from "./components/Card/Card";
import TablePage from "./pages/TablePage";
import Footer from "./components/Footer/Footer";
import ErrorPage from "./pages/ErrorPage";

import Words from "../../englishcards/src/api/words.json";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route exact path="/" element={<TablePage />} />
        <Route exact path="/game" element={<GamePage />} />
        <Route exact path="/vocabulary" element={<TablePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
      //Перебор массива слов
      {/* {Words.map((word, index) => (
        <Card key={index} {...word} />
      ))} */}
    </div>
  );
}

export default App;
