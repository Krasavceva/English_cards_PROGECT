import React from "react";
import "../../styles/app.scss";
import { Routes, Route } from "react-router-dom";

import Layout from "../../components/Layout/Layout";
import GamePage from "../GamePage";
import TablePage from "../TablePage";
import ErrorPage from "../ErrorPage";

import SliderFunc from "../../components/SliderFunc/SliderFunc";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route exact path="/" element={<TablePage />} />
          <Route exact path="/game" element={<GamePage />} />
          <Route exact path="/vocabulary" element={<TablePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
      <SliderFunc />
    </div>
  );
}

export default App;
