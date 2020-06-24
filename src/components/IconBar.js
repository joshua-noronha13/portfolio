import React from "react";
import Logo from "./Logo"
export function IconBar() {
    return (
        <>
            <div id="#IconContainer" style={{ position: "fixed", top: 0, width: "3.5em", height: "100vh", textAlign: "center" }}>
                <Logo />
                <i class="fa fa-linkedin fa-fw" aria-hidden="true" style={{ padding: "10px", marginTop: "70vh" }}></i><br />
                <i class="fa fa-envelope-o fa-fw" aria-hidden="true" style={{ padding: "10px" }}></i><br />
                <i class="fa fa-github fa-fw" aria-hidden="true" style={{ padding: "10px" }}></i><br />
            </div>
        </>
    )
}