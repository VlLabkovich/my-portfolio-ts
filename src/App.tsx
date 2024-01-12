import React from 'react';
import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {AboutMe} from "./layout/sections/aboutMe/AboutMe";
import {Skills} from "./layout/sections/skills/Skills";
import {Projects} from "./layout/sections/projects/Projects";
import {Contact} from "./layout/sections/contact/Contact";

function App() {
  return (
    <div className="App">
        <Header/>
        <Main/>
        <AboutMe/>
        <Skills/>
        <Projects/>
        <Contact/>
    </div>
  );
}

export default App;
