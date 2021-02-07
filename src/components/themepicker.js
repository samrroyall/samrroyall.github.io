import React from "react"
import themes from "../../static/themes"
import "../styles/ThemePicker.css"

class ThemePicker extends React.Component {
    constructor(props) {
        super(props);
        // `document` error check must be available for deployment
        if (typeof document !== `undefined` ) {
            var currTheme = document.documentElement.style.getPropertyValue("--theme");
        } else {
            // default theme is alpine
            var currTheme = "retro";
        }
        this.state = { theme: currTheme };
        this.changeTheme = this.changeTheme.bind(this);
    }

    changeTheme(e) {
        let newTheme = e.target.value; 
        if (newTheme === "") return;
        // `document` error check must be available for deployment
        if (typeof document !== `undefined`) {
            this.setState({theme: newTheme});
            let colorVals = themes[newTheme]; // get new theme's color values

            // set CSS vars with new color values
            document.documentElement.style.setProperty("--theme", newTheme);
            document.documentElement.style.setProperty("--primary-color", colorVals.primary);
            document.documentElement.style.setProperty("--light-color", colorVals.light);
            document.documentElement.style.setProperty("--dark-color", colorVals.dark);
            if (colorVals.hasOwnProperty("text")) {
                document.documentElement.style.setProperty("--text-color", colorVals.text);
            } else {
                // default text color is white
                document.documentElement.style.setProperty("--text-color", "#ffffff");
            }
        }
    }

    render() {
        let options = [];
        let sortedThemes = Object.keys(themes).sort()
        for (let i = 0; i < sortedThemes.length; i++) {
            let theme = sortedThemes[i];
            let option = <option key={i+1} value={theme}>{theme.replaceAll("-"," ")}</option>;
            options.push(option);
        }
        return (
            <select id="themeDropdown" onChange={(e) => this.changeTheme(e)}>
                <option key={0} value="" />
                {options}
            </select>
        );
    }
}

export default ThemePicker;