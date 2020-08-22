import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { motion } from "framer-motion"
import Logo from "../Logo/Logo"
import Toggle from "./Toggle"
import "./navbar.css"

export default function MainNavbar() {
    let darkMode = false;
    const variant = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                type: 'spring',
                staggerChildren: 0.2,
                delay: 0.7
            }
        }
    }
    return (
        <motion.span variants={variant} initial="initial" animate="animate">
            <Navbar id="navbar" expand="lg">
                <Navbar.Brand href="#home" id="brand"><Logo /></Navbar.Brand>
                <Navbar.Brand id="toggle-theme">
                    {/* <Toggle darkMode={darkMode}></Toggle> */}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link href="#home" id="home">Home</Nav.Link>
                        <Nav.Link href="#link">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </motion.span>
    )
}