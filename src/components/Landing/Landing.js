import React from "react";
import { Container } from "react-bootstrap"
import { motion } from "framer-motion"
import PrimaryButton from "../BasicComponents/PrimaryButton"
import "./landing.css"

function Landing() {
    const variant = {
        initial: {
            opacity: 0,
            y: -10
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                staggerChildren: 0.2,
                mass: 0.1,
                duration: 2
            }
        }
    }
    const titleVariant = {
        animate: {
            color: ["rgb(0,0,0)", "rgb(0,0,255)", "rgb(0,255,0)", "rgb(255,0,0)", "rgb(0,0,0)"],
            transition: {
                type: 'spring',
                color: {
                    yoyo: "infinity",
                    duration: 10
                },
                delay: 0.9,
            }
        }
    }
    return (
        <Container id="landing-container" fluid="md">
            <motion.div variants={variant} initial="initial" animate="animate">
                <motion.div id="preface" variants={variant}>Hi, my name is</motion.div>
                <motion.div id="title" variants={titleVariant} initial="initial" animate="animate">Joshua Noronha.</motion.div>
                <motion.div id="subtitle" variants={variant}>I am a Full Stack Developer.</motion.div>
                <motion.div id="title-text" variants={variant}>
                    I'm a software engineer specializing in making enterprise level websites and backends 
                        </motion.div>
                <motion.span variants={variant}>
                    <PrimaryButton text="See Projects!" />
                </motion.span>
            </motion.div>
        </Container>
    )
}

export default Landing;