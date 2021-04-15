import React from "react"
import { CIcon } from '@coreui/icons-react'

const CoreUIIcon = ({title, name, content, size}) => (
    <span title={title} aria-label={name}>
        <CIcon 
            content={content} 
            size={size}
        />
    </span>
);

export default CoreUIIcon;