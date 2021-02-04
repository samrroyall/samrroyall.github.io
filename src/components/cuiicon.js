import React from "react"
import { CIcon } from '@coreui/icons-react'

let CoreUIIcon = (props) => (
    <span title={props.title} aria-label={props.name}>
        <CIcon 
            content={props.content} 
            size={props.size}
        />
    </span>
);

export default CoreUIIcon