import './App.css';
import NavBar from './Components/NavBar';
import TextArea from './Components/TextArea';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUS from './Components/AboutUS';
import React, { useState } from 'react';

export default function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<TextArea />} />
          <Route exact path='/about' element={<AboutUS />} />
        </Routes>
      </Router>
    </>
  );
}