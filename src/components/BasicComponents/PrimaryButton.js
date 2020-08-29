import React from "react";
import { Button } from "react-bootstrap"
export default function PrimaryButton(props) {
    const text = props.text
    return (
        <Button variant="outline-primary" style={{ marginTop: '1em' }}>
            {text}
        </Button>
    )

}
