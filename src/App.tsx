import React from 'react';
import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {AboutMe} from "./layout/sections/aboutMe/AboutMe";
import {Skills} from "./layout/sections/skills/Skills";
import {Projects} from "./layout/sections/projects/Projects";

function App() {
  return (
    <div className="App">
        <Header/>
        <Main/>
        <AboutMe/>
        <Skills/>
        <Projects/>
    </div>
  );
}

export default App;
