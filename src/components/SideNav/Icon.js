import React from "react";

export default function Icon(props) {
    const iconType = props.iconType;
    const url = props.url
    return (
        <div>
            <a href={url} target="_blank" rel="noopener noreferrer">
                <i class={`fa ${iconType}`} aria-hidden="true" style={{ padding: "10px", color:"rgb(33, 37, 41)" }}/>
            </a>
        </div>
    )
}