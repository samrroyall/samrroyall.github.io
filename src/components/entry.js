import React from "react"
import "../styles/entry.css"

class Entry extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hidden: true };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {
        this.setState({ hidden: !this.state.hidden });
    }

    render () {
        return (
            <>
                <div className="head text-light" onClick={ this.handleClick }>
                    <span>
                        <h2>{this.props.title}</h2>
                        <span className="subtitle">{this.props.subtitle}</span>
                    </span>
                    <span className="date">{this.props.date}</span>
                </div>
                <div className={this.state.hidden ? "body hide" : "body"}>
                    {this.props.content}
                </div>
            </>
        );
    }
}

export default Entry;