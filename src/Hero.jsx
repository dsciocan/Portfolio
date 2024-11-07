import React from "react";
import "./hero.css"

export default function Hero() {


    return (
        <div className="py-24 px-24 my-4" id="hero">
            <div id="hero-highlight">
            <h1 id="highlight" className="text-8xl font-extrabold tracking-widest">STEF CIOCAN</h1>
            </div>
            <h3 className="text-start text-2xl pt-3 font-light">Software Developer</h3>
            <ul className="pt-5 text-4xl leading-10 space-y-3 font-semibold" id="hero-links">
                <li>ABOUT</li>
                <li>PROJECTS</li>
                <li>GET IN TOUCH</li>
            </ul>
        </div>
    )
}