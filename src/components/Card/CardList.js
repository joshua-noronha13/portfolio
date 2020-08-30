import React from "react";
import { Card } from "./Card"
import { motion } from "framer-motion"

export default function CardList() {
    const projects = [{
        name: "Smart Street Lamps",
        image: "emoji_objects",
        color: "#FFEB3B",
        description: `Made a Smart Street Lamp with features like LED dimming, 
        Number plate tracking using Camera and Pollution Detection using a Raspi 
        and Arduino`,
        tags : ['Pytorch','Arduino','Raspi','MQTT','Tesseract']
    }, {
        name: "Smartwatch",
        image: "watch",
        color: "#039BE5",
        description: 
        `Worked on making a Smartwatch using a NodeMCU, LED display, heartbeat sensor 
        and a 3D printed case for a research project on Smartwatches for Senior Citizens`,
        tags : ['Lua','Node','IOT','MQTT']
    }, {
        name: "Portfolio Website",
        image: "web_asset",
        color: "#7CB342",
        description: `Made a website for displaying projects and for information about 
        my resume and my github page. Hosting the website on Github Pages with deployment 
        via Github Actions`,
        tags : ['React', 'Bootstrap', 'Devops']
    }, {
        name: "Healthy Fit App",
        image: "fitness_center",
        color: "#9C27B0",
        description: `Worked on making a fitness focused mobile app which classifies food based on 
        images and suggests workout videos for a Hackathon. Hosted the backend on render.com`,
        tags : ['React-Native', 'Pytorch', 'Docker', 'Node']
    }, {
        name: "DD-Free Dish Pay Per View System",
        image: "code",
        color: "#F4511E",
        description: `Made a Netflix like cross-platform mobile application along with a setup box 
        add on module with which users could pay for a TV serial and watch it on his DD Free Dish setup box.`,
        tags : ['Ionic-V2', 'Node', 'Arduino']
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
            <h2 style={{color:"var(--secondary)"}}>A Few of my Projects</h2>
                    {projects.map((project, index )=> {
                        return (
                            <Card project={project} childVariants={childVariants} key={index}/>
                        )
                    })}
        </motion.div>
    )
}
