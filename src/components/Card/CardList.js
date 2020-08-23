import React from "react";
import { Card } from "./Card"
import { motion } from "framer-motion"

export default function CardList() {
    const projects = [{
        name: "Smart Street Lamps",
        imageSrc: "../img/smart_street_lamp.png",
    }, {
        name: "Camping Grounds",
        imageSrc: "../img/smart_street_lamp.png"
    }, {
        name: "Maps",
        imageSrc: "../img/smart_street_lamp.png"
    }]
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
            {/* <Container fluid> */}
                    {projects.map((project, index )=> {
                        return (
                            <Card project={project} childVariants={childVariants} key={index}/>
                        )
                    })}
            {/* </Container> */}
        </motion.div>
    )
}
