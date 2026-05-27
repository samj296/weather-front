import { useState } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Login from "./Login";
import "./App.css"
import WikiPage from "./pages/WikiPage/WikiPage";

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wiki" element={<WikiPage/>} />
      </Routes>
      
    </BrowserRouter>
    
  );
};


export default App;