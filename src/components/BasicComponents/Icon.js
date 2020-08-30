import React from "react";

export default function Icon(props) {
    const iconType = props.iconType;
    const url = props.url
    return (
        <span>
            <a href={url} target="_blank" rel="noopener noreferrer">
                <i className={`fa ${iconType}`} aria-hidden="true" style={{ padding: "10px", color: "var(--secondary)" }}/>
            </a>
        </span>
    )
}