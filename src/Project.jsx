import {React, useState, useEffect} from "react";
import "./project.css"
import { motion, useAnimation, useAnimationControls } from "framer-motion";

export default function Project(props) {    

    return (
        <div className="card px-5 pt-16 flex relative text-white">
        <img className="object-fill rounded-sm align-middle" src={props.img}/>
            <div className="perm-overlay absolute block top-16 left-5 right-5 bottom-0"/>
            <div className="overlay absolute py-10 left-5 right-5 bottom-0 bg-transparent text-transparent hover:bg-bg-dark hover:text-bg-light hover:shadow-black-sm ease-in duration-200">
            <a target="_blank" href={props.link}> 
                <p className="project font-light uppercase text-2xl hover:text-amber-700 ">{props.title}</p>
            </a> 
            </div>
         </div>
         
    )
}