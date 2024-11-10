import React from "react";
import { motion } from "framer-motion";

export default function About() {

    return (
        
    <div className="bg-bg-light py-14 flex justify-around">
        <motion.div 
        initial={{ opacity:0, x:-75}}
        whileInView={{opacity:1, x:0}}
        transition={{duration:1.5, delay:0.5}}
        src="./me-photo.jpg" 
        >
         <img src="me-photo.jpg" height={'400px'} width={'400px'}/>
        </motion.div>
        <div className="text-xl font-normal">
            <p>Hi there, my name is Stef.</p>
        </div>
    </div>
    )

}