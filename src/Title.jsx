import { motion } from "framer-motion";



export default function Title(props) {

    return (
        <div className="py-24">
        <motion.div  
        initial={{ opacity:0, x:-75}}
        whileInView={{opacity:1, x:0}}
        transition={{duration:1.5, delay:0.5}} >
            <h3 className="text-5xl font-semibold text-white pl-10">{props.text}</h3>
        </motion.div >
        <motion.div 
        initial={{ x:-200}}
        whileInView={{ x:0}}
        transition={{duration: 1}} 
        className="ml-3 w-60 mt-5 border-t-8 text-white"/>
        </div>

    )
}