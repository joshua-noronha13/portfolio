import React from "react";
import "./footer.css"
import Icon from "../BasicComponents/Icon"
export default function About() {
    return (
        <div style={{ textAlign: "center", marginTop: "5em", marginBottom: "5px" }}>
            <div style={{ color: "var(--secondary)" }}>Made with <span class="material-icons" style={{ fontSize: "0.9rem" }}>favorite</span> by Joshua Noronha</div>
            <div className={"iconbar"}>
                <Icon
                    url="https://www.linkedin.com/in/joshua-noronha/"
                    iconType="fa-linkedin"
                />
                <Icon
                    url="mailto:noronhajoshua@gmail.com"
                    iconType="fa-envelope-o"
                />
                <Icon
                    url="https://github.com/joshuanoronha/"
                    iconType="fa-github"
                />
            </div>
        </div>
    )
}
