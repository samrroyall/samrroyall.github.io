import React, {useState} from "react"
import "../styles/Section.css"

const Section = ({pos, background, title, content}) => {
    const [focused, setFocused] = useState(false);

    var classString = "";
    if (pos === 0) {
        classString += "header";
    } else {
        if (pos > 2) classString += "notFirstRow ";
        if (pos % 2 === 0) classString += "notFirstCol";
    }

    return (
        <section className={classString}
            onMouseOver={e => setFocused(!focused)}
            onMouseOut={e => setFocused(!focused)}
            style={
                focused ? {
                    backgroundImage: `url(${background})`,
                    backgroundSize: "cover"
                } : {}
            }
        >
            <div className="sectionTitle"><h1>{title}</h1></div>
            <div className="wrapper"> {content} </div>
        </section>
    );
}

export default Section;