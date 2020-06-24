import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { shuffle } from "lodash";

const spring = {
    type: "spring",
    damping: 20,
    stiffness: 300
};

export const Logo = () => {
    const [colors, setColors] = useState(initialColors);

    useEffect(() => {
        setTimeout(() => setColors(shuffle(colors)), 2000);
    }, [colors]);

    return (
        <ul id="logo">
            {colors.map(background => (
                <motion.li
                    key={background}
                    layoutTransition={spring}
                    style={{ background }}
                />
            ))}
        </ul>
    );
};
export default Logo
const initialColors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF"];
