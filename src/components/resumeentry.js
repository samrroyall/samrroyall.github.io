import React from "react"
import "../styles/ResumeEntry.css"

let ResumeEntry = (props) => (
    <div className="head textLight">
        <div className="lhs">
            <span className="logo" aria-label={props.iconLabel}>
                {props.icon}
            </span>
            <span className="titles">
                <h2>{props.title}</h2>
                <span className="subtitle">{props.subtitle}</span>
            </span>
        </div>
        <div className="date">{props.date}</div>
    </div>
);

export default ResumeEntry;