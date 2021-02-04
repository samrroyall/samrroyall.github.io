import React from "react"
import "../styles/Section.css"

class Section extends React.Component {
    constructor(props) {
        super(props);
        this.state = {focused: false};
        this.handleHover = this.handleHover.bind(this);
    }

    handleHover(b) { this.setState({focused: !this.state.focused}); }

    render() {
        var classString = ""
        if (this.props.pos === 0) {
            classString += "header"
        } else {
            if (this.props.pos > 2) classString += "notFirstRow "
            if (this.props.pos % 2 === 0) classString += "notFirstCol"
        }

        return (
            <section className={classString}
                onMouseOver={this.handleHover}
                onMouseOut={this.handleHover}
                style={
                    this.state.focused ? {
                        backgroundImage: `url(${this.props.background})`,
                        backgroundSize: "cover"
                    } : {}
                }
            >
                <div className="sectionTitle"><h1>{this.props.title}</h1></div>
                <div className="wrapper"> {this.props.content} </div>
            </section>
        );
    }
}

export default Section;