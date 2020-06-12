import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        < Header />
        < Main />
      </div>
    </BrowserRouter>
  );
};

export default App;
