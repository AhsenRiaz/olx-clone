import React from "react";
import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Poster from "./components/Poster";
// import Phone from "./components/Phone";
import Fresh from "./components/Fresh";
import Ad from "./components/Ad";
import AppIntro from "./components/AppIntro"
import Footer from "./components/Footer"
import License from "./components/License"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ProductDetails from "./components/ProductDetails";
import Phone from "./components/Phone"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Menu />
      <Poster />
    <Phone/>
      <Routes>
      <Route exact path = "/" element = {<Fresh/>}></Route>
      <Route path = "product/:id" element = {<ProductDetails/>} ></Route>
      </Routes>
      
      <Ad/>
      <AppIntro/>
      <Footer/>
      <License/>
      </BrowserRouter>
     
     
    
    </div>
  );
}

export default App;
