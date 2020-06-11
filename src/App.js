import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Header from "./Components/Header/Header";
import MainContent from "./Components/MainContent/MainContent";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <MainContent/>
        <Footer/>
      </div>
    </BrowserRouter>
  );
};

export default App;
