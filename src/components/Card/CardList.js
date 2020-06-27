import React from "react";
import { Card } from "./Card"
import { motion } from "framer-motion"

import { Container,Row } from "react-bootstrap";

export function CardList() {
    const projects = [{
        name: "Smart Street Lamps",
        imageSrc: "../img/smart_street_lamp.png"
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
        },
        visible: {
            opacity: 1,
        }
    }
    return (
        <motion.div className="container" variants={cardContainerVariants} initial="hidden" animate="visible">
            <Container fluid>
                <Row>
                    {projects.map(project => {
                        return (
                            <Card project={project} childVariants={childVariants} />
                        )
                    })}
                </Row>
            </Container>
        </motion.div>
    )
}
