import React from "react"
import "../styles/tooltip.css"

class Tooltip extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hidden: true };
        this.hide = this.hide.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    hide() {
        this.setState({ hidden: true });
    }

    handleClick() {
        this.setState({ hidden: false });
        navigator.clipboard.writeText(this.props.copyText);
        setTimeout(this.hide, 800);
    }

    render () {
        return(
            <div onClick={this.handleClick}>
                {this.props.content}
                <div className={this.state.hidden ? "tooltip hide" : "tooltip"}>
                    <span className="display">
                        {this.props.displayText}
                    </span>
                </div>
            </div>
        )
    }
}

export default Tooltip;