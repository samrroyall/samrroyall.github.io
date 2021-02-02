import React from "react"
import { CIcon } from '@coreui/icons-react'
import { brandSet } from '@coreui/icons'

class CoreUIIcon extends React.Component {
    render() {
        return(
            <span title={this.props.title} aria-label={this.props.name}>
                <CIcon 
                    content={this.props.content} 
                    size={this.props.size}
                />
            </span>
        );
    }
}

export default CoreUIIcon