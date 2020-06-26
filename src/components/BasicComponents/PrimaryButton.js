import React from "react";
import { Button } from "react-bootstrap"
import "./basicComponents.css"
export default function PrimaryButton(props) {
    const text = props.text
    return (
        <Button variant="outline-primary" className="button">
            {text}
        </Button>
    )

}
