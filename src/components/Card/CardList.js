import React from "react";
import { Card } from "./Card"
import { motion } from "framer-motion"
import { projects } from "../../data/projects"
export default function CardList() {
    
    const cardContainerVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }
    const childVariants = {
        hidden: {
            opacity: 0,
            x: -100,
        },
        visible: {
            opacity: 1,
            x: 0
        }
    }
    return (
        <motion.div className="container" variants={cardContainerVariants} initial="hidden" animate="visible">
            <h2 style={{ color: "var(--secondary)" }}>A Few of my Projects</h2>
            {projects.map((project, index) => {
                return (
                    <Card project={project} childVariants={childVariants} key={index} />
                )
            })}
        </motion.div>
    )
}
