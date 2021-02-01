import React from "react"
import themes from "../../static/themes"
import "../styles/themepicker.css"

class ThemePicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            theme: document.documentElement.style.getPropertyValue("--theme")
        };
        this.changeTheme = this.changeTheme.bind(this);
    }

    changeTheme(e) {
        var newTheme = e.target.value;
        this.setState({theme: newTheme});
        var colors = themes[newTheme];
        document.documentElement.style.setProperty("--theme", newTheme);
        document.documentElement.style.setProperty("--primary-color", colors.primary);
        document.documentElement.style.setProperty("--light-color", colors.light);
        document.documentElement.style.setProperty("--dark-color", colors.dark);
        if (colors.hasOwnProperty("text")) {
            document.documentElement.style.setProperty("--text-color", colors.text);
        } else {
            document.documentElement.style.setProperty("--text-color", "#ffffff");
        }
    }

    render() {
        return (
            <select id="theme-dropdown" 
                value={this.state.theme}
                onChange={(e) => this.changeTheme(e)}
            >
                <option>alpine</option>
                <option>boulder</option>
                <option>cyberspace</option>
                <option value="miami-nights">miami nights</option>
                <option value="modern-dolch">modern dolch</option>
                <option>monokai</option>
                <option>muted</option>
                <option value="muted-mr-sleeves">muted mr. sleeves</option>
                <option value="night-runner">night runner</option>
                <option>pastel</option>
                <option value="red-dragon">red dragon</option>
                <option value="red-samurai">red samurai</option>
                <option>retro</option>
                <option>serika</option>
                <option>shoko</option>
                <option>solarized</option>
                <option>strawberry</option>
                <option value="synthwave-84-1">synthwave '84 #1</option>
                <option value="synthwave-84-2">synthwave '84 #2</option>
                <option>terminal</option>
                <option>vaporwave</option>
                <option value="80s-after-dark">80s after dark</option>
                <option>8008</option>
                <option>9009</option>
            </select>
        );
    }
}

export default ThemePicker;