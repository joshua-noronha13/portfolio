import React from "react";
import { Form } from "react-bootstrap"
export default function Toggle(props) {
    let dark = false
    return (
        <div style={{display:'inline-block'}}>
            <i class="fa fa-sun-o" style={{display:'inline-block'}} aria-hidden="true"></i>
            <Form.Check
                type="switch"
                id="custom-switch"
                label=""
                style={{display:'inline-block',margin:"0 0 0 7px"}}
                value={dark}
                onChange={toggleDarkMode}
            />
            <i class="fa fa-moon-o" aria-hidden="true" style={{display:'inline'}}></i>
        </div>
    )
    function toggleDarkMode() {
        dark = !dark;
        const root = document.querySelector(':root');
        if (dark) {
            root.style.setProperty('--background', 'black');
            root.style.setProperty('--fontColor', 'white');
        } else {
            root.style.setProperty('--background', 'white');
            root.style.setProperty('--fontColor', '#232323');
        }
    }
}
