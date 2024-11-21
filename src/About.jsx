import React from "react";
import { motion } from "framer-motion";

export default function About() {

    return (
        
    <div className="bg-bg-light py-14 lg:flex justify-around items-center">
        <div className="relative">
        <motion.div 
        initial={{ scale: 0.9, opacity: 0}}
        whileInView={{scale: 1, opacity: 1}}
        transition={{duration:0.3, delay:0.5, ease: "easeInOut"}}
        className="sm:pl-24 pl-10 pr-10 mb-5"
        >
         <img src="me-photo.jpg" className="sm:max-w-96 sm:min-w-60"/>
        </motion.div>
        <motion.div
        initial={{right: 0}}
        whileInView={{right: "100%"}}
        transition={{duration: 0.5, ease:"easeIn"}}
        className="absolute top-0 bottom-0 lg:left-10 lg:right-0 left-10 right-0 max-w-lg bg-dark-red"/>
        </div>
        <div className="text-xl font-normal sm:px-24 px-10 text-bg-dark">
            <p>I am a software developer who enjoys creating things, especially if they solve a practical problem or look pretty. </p>
            <br/>
            <p> Fascinated with the many different means of communication thanks to my background in linguistics, I was drawn to the world of coding. And as I started to gain a sense of all the things one can create once learning to communicate with computers, my interest only grew. </p>
            <br/>
            <p>For the past year, I have been learning how to best and most effectively solve real world problems and what I can bring to the industry, and am excited for the any chance to contribute my skillset where it is needed, and keep improving along the way!</p>
        </div>
    </div>
    )

}