import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { shuffle } from "lodash";

export default function Loader() {
    const [colors, setColors] = useState(initialColors);
    const variant = {
        initial: {
            opacity: 0,
            y: -100,
            x: -100
        },
        animate: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                type: 'spring',
                staggerChildren: 0.2,
                mass: 0.1,
                duration: 1
            }
        }
    }
    useEffect(() => {
        setTimeout(() => setColors(shuffle(colors)), 400);
    }, [colors]);
    return (
        
        <motion.div
            style={{position:"absolute", top:50, right: 50 }}
            variants={variant}
            animate="animate"
            transition="transition">
            Hello
        </motion.div>
    );
}

const initialColors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF"];
