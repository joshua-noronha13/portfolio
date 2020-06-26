import React from "react";
import Logo from "../Logo/Logo"
import Icon from "./Icon"
import "./sidenav.css"
export default function SideBar() {
    return (
        <>
            <div id="sidenav">
                <Logo />
                <div id="icon-container">
                <Icon
                    url="https://www.linkedin.com/in/joshua-noronha-937330148/"
                    iconType="fa-linkedin"
                />
                <Icon
                    url="https://github.com/joshua-noronha13/"
                    iconType="fa-envelope-o"
                />
                <Icon
                    url="https://github.com/joshua-noronha13/"
                    iconType="fa-github"
                />
                </div>
            </div>
        </>
    )
}