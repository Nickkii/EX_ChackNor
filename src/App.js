import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Search from "./Components/Search";
import Random from "./Components/Random";
import Home from "./Components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </>
      </BrowserRouter>
    </>
  );
}

export default App;
