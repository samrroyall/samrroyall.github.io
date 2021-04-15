import React from "react"
import themes from "../../static/themes"
import "../styles/ThemePicker.css"

const ThemePicker = () => {
    const changeTheme = e => {
        let newTheme = e.target.value; 
        if (newTheme === "") return;
        // `document` error check must be available for deployment
        if (typeof document !== `undefined`) {
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

    const options = Object.keys(themes).sort().map((theme, idx) => (
        <option key={idx} value={theme}>{theme.replaceAll("-"," ")}</option>
    ));

    return (
        <select id="themeDropdown" onChange={e => changeTheme(e)}>
            <option key={0} value="" />
            {options}
        </select>
    );
}

export default ThemePicker;