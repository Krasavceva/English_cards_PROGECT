import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import Card from "./components/Card/Card";
import Table from "./components/Table/Table";
import Footer from "./components/Footer/Footer";

// const words = [
//   {
//     id: "12212",
//     english: "animal ",
//     transcription: "[ ˈæn.ɪ.məl ]",
//     russian: "животное",
//     tags: "животные",
//     tags_json: '["u0436u0438u0432u043eu0442u043du044bu0435"]',
//   },
//   {
//     id: "12516",
//     english: "dog",
//     transcription: "[dɒg]",
//     russian: "собака",
//     tags: "pets",
//     tags_json: '["pets"]',
//   },
// ];

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/game" element={<Slider />} />
        <Route path="/vocabulary" element={<Table />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

// {
//       <div className="body">
//         {words.map((word, index) => (
//           <Card key={index} {...word} />
//         ))}
//       </div>
// }
