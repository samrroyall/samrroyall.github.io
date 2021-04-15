import React, {useState} from "react"
import "../styles/Tooltip.css"

const Tooltip = ({content}) => {
    const [hidden, setHidden] = useState(true);

    const hide = () => setHidden(true);
    const show = () => setHidden(false);

    const handleClick = e => {
        show(); // show tooltip
        navigator.clipboard.writeText(this.props.copyText); // write tooltip text to clipboard
        setTimeout(hide, 800); // hide tooltip after .8 seconds
    }

    return(
        <div onClick={e => handleClick(e)}>
            { 
                hidden ? <></> : (<>
                    {content}
                    <div className="tooltip">
                        <span className="display">{this.props.displayText}</span>
                    </div>
                </>)
            }
        </div>
    );
}

export default Tooltip;