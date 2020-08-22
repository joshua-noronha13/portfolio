import React from "react";
import { Navbar, NavDropdown, Nav, FormControl, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion"
import Logo from "../Logo/Logo"
import "./navbar.css"

export default function MainNavbar() {
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
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link href="#home" id="home">Home</Nav.Link>
                        <Nav.Link href="#link">About</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </motion.span>
    )
}