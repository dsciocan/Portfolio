import React from "react";
import "./hero.css"
import { HashLink } from "react-router-hash-link";
export default function Hero() {


    return (
        <div className="pt-32 px-12 sm:px-24 mt-5 items-center space-y-12" id="hero">
            <div id="hero-highlight">
            <h1 id="highlight" className=" text-8xl sm:text-9lx lg:text-10xl font-light font-sunbru tracking-widest text-dark-red">Stef Ciocan</h1>
            </div>
            <h3 className="text-start text-2xl pt-5 font-light mt-4">Software Developer</h3>
            <ul className=" text-4xl leading-10 space-y-3 font-semibold" id="hero-links">
                <li><HashLink to={"/#about"}>ABOUT ME</HashLink></li>
                <li><HashLink to={"/#projects"}> PROJECTS</HashLink></li>
                <li><HashLink to={"/#contact"}>GET IN TOUCH</HashLink></li>
            </ul>
        </div>
    )
}