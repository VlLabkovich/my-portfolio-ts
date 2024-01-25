import React from 'react';
import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {AboutMe} from "./layout/sections/aboutMe/AboutMe";
import {Skills} from "./layout/sections/skills/Skills";
import {Projects} from "./layout/sections/projects/Projects";
import {Contacts} from "./layout/sections/contacts/Contact";
import {Footer} from "./layout/footer/Footer";
import {Particle} from "./components/particle/Particle";

function App() {
  return (
    <div className="App">
        <Particle/>
        <Header/>
        <Main/>
        <AboutMe/>
        <Skills/>
        <Projects/>
        <Contacts/>
        <Footer/>
    </div>
  );
}

export default App;
