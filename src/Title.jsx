import { useAnimation, useInView, motion } from "framer-motion";
import React, { useEffect, useRef } from "react";


export default function Title(props) {

    const ref = useRef();
    const isInView = useInView(ref);

    const animation = useAnimation();
    const lineAnimation = useAnimation();

    useEffect( () => {
        if(isInView) {
            animation.start('2')
            lineAnimation.start('2')
        } 
    }
        ,[isInView])


    return (
        <div className="py-24" ref={ref}>
        <motion.div  
        variants={{
            '1':{ opacity:0, x:-75},
            '2': {opacity:1, x:0}
        }}
        initial='1'
        animate={animation}
        transition={{duration:1.5, delay:0.5}} >
            <h3 className="text-5xl font-semibold text-white pl-10">{props.text}</h3>
        </motion.div >
        <motion.div variants={{
            '1':{ x:-200},
            '2': { x:0}
        }}
        initial='1'
        animate={lineAnimation}
        transition={{duration: 1}} 
        className="ml-3 w-60 mt-5 border-t-8 text-white"/>
        </div>

    )
}