import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from "./Component/Home/Home.jsx";
import Nav from "./Component/Nav/Nav";
import Detalle from "./Component/Detalle/Detalle";
import Page from ".//Component/Search/Page";
import About from "./Component/About/About";
About


function App() {
  return (
    <div className="App">
  
        <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/detalle/:id" element={<Detalle/>}/>
        <Route path="/search/" element={<Page/>} />
        <Route path="/about" element={<About/>}/>
       
      </Routes>
  
     
    </div>
  );
}

export default App;
