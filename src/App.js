import React from "react";

import "./App.css";
import Header from "./Header";
import Home from "./Home";
import BottomMenu from "./BottomMenu";
import { Routes, Route,  } from "react-router-dom";

import Auths from "./Auths";
import Login  from "./Login";

function App() {
  return (
    <div className="App">
      {/* Header Section*/}
      <Header />
      {/* Main, home Container*/}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auths"  element={<Auths />} />
        <Route path="/login"  element={<Login />} />

      </Routes>

      <BottomMenu />
    </div>
  );
}

export default App;
