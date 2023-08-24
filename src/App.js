import "./App.css";
import NavBar from "./Components/NavBar";
import TextArea from "./Components/TextArea";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Invoice from "./Components/Invoice";
import React from "react";

export default function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<TextArea />} />
          <Route exact path="/Invoice" element={<Invoice />} />
        </Routes>
      </Router>
    </>
  );
}
