import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NoteState from "./context/notes/noteState";
import About from "./components/About";

function App() {
  return (
    <>
      <NoteState>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </NoteState>
    </>
  );
}

export default App;
