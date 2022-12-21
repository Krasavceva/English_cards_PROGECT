import React from "react";
import "../../styles/app.scss";
import { Routes, Route } from "react-router-dom";

import Header from "../../components/Header/Header";
import GamePage from "../GamePage";
import TablePage from "../TablePage";
import Footer from "../../components/Footer/Footer";
import ErrorPage from "../ErrorPage";

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
    </div>
  );
}

export default App;
