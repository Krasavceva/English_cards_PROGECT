import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "../../styles/app.scss";
import GetServices from "../../Services/GetServices";

import Layout from "../../components/Layout/Layout";
import GamePage from "../../pages/GamePage";
import TablePage from "../TablePage";
import ErrorPage from "../ErrorPage";
import Card from "../../components/Card/Card";

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
    </div>
  );
}

export default App;
