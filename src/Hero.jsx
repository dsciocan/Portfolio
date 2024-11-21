import React from "react";
import "./hero.css"
import { HashLink } from "react-router-hash-link";
export default function Hero() {


    return (
        <div className="pt-32 px-16 sm:px-24 mt-5" id="hero">
            <div id="hero-highlight">
            <h1 id="highlight" className=" text-8xl sm:text-9lx lg:text-10xl font-light font-sunbru tracking-widest text-dark-red">Stef Ciocan</h1>
            </div>
            <h3 className="text-start text-2xl pt-3 font-light">Software Developer</h3>
            <ul className="pt-5 text-4xl leading-10 space-y-3 font-semibold" id="hero-links">
                <li><HashLink to={"/#about"}>ABOUT</HashLink></li>
                <li><HashLink to={"/#projects"}> PROJECTS</HashLink></li>
                <li><HashLink to={"/#contact"}>GET IN TOUCH</HashLink></li>
            </ul>
        </div>
    )
}