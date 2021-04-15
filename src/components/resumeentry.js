import React from "react"
import "../styles/ResumeEntry.css"

const ResumeEntry = ({icon, iconLabel, title, subtitle, date}) => (
    <div className="head textLight">
        <div className="lhs">
            <span className="logo" aria-label={iconLabel}>{icon}</span>
            <span className="titles">
                <h2>{title}</h2>
                <span className="subtitle">{subtitle}</span>
            </span>
        </div>
        <div className="date">{date}</div>
    </div>
);

export default ResumeEntry;