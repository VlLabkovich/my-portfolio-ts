import React from 'react';
import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {AboutMe} from "./layout/sections/aboutMe/AboutMe";

function App() {
  return (
    <div className="App">
        <Header/>
        <Main/>
        <AboutMe/>
    </div>
  );
}

export default App;
