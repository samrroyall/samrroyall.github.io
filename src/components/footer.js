import React from "react"
import { brandSet, freeSet } from "@coreui/icons"
import { Link } from "gatsby"
// components
import CoreUIIcon from "./CUIIcon"
import ThemePicker from "./ThemePicker"
import Tooltip from "./Tooltip"
import "../styles/Footer.css"

export default function Footer(props) {
    let returnToTopLink = (
        <Link to={"/"+props.currPage} id="returnToTop">
            <CoreUIIcon content={freeSet.cilArrowThickFromBottom}
                size="2xl"
                name="return to top"
                title="Return to Top"
            />
        </Link>
    )
    let githubIconLink = (
        <a href="https://github.com/samrroyall/" target="_blank">
            <CoreUIIcon content={brandSet.cibGithub} 
                size="2xl" 
                name="GitHub" 
            />
        </a>
    );
    let linkedInIconLink = (
        <a href="https://www.linkedin.com/in/samrroyall" target="_blank">
            <CoreUIIcon content={brandSet.cibLinkedin} 
                size="2xl" 
                name="linkedin" 
                title="LinkedIn" 
            />
        </a>
    );
    let angellistIconLink = (
        <a href="https://angel.co/u/samrroyall" target="_blank">
            <CoreUIIcon content={brandSet.cibAngellist} 
                size="2xl" 
                name="angellist" 
                title="Angel List" 
            />
        </a>
    );
    let leetcodeIconLink = (
        <a href="https://leetcode.com/fjallraver/" target="_blank">
            <CoreUIIcon content={brandSet.cibLeetcode} 
                size="2xl" 
                name="leetcode" 
                title="Leetcode" 
            />
        </a>
    );
    let discordIcon = (
        <CoreUIIcon content={brandSet.cibDiscord} 
            id="discord" 
            size="2xl" 
            name="discord"
            title="Discord"
        />
    )
    let gatsbyIcon = (
        <CoreUIIcon content={brandSet.cibGatsby} 
            size="lg" 
            name="gatsby logo"
            title="Gatsby"
        />
    );
    let reactIcon = (
        <CoreUIIcon content={brandSet.cibReact} 
            size="lg" 
            name="react logo"
            title="ReactJS"
        />
    );
    let nodeIcon = (
        <CoreUIIcon content={brandSet.cibNodeJs} 
            size="lg" 
            name="node.js logo"
            title="Node.js"
        />
    );

    return(
        <footer>
            <div id="socialsList">
                {githubIconLink} 
                {linkedInIconLink} 
                {angellistIconLink} 
                {leetcodeIconLink}        
                <Tooltip 
                    content={discordIcon}
                    copyText="fjallraver#2825"
                    displayText="Copied!"
                />
                {returnToTopLink}
            </div>
            <div id="theme">
                <label htmlFor="themeDropdown" className="fine textWhite" id="themePrompt">
                    Choose your favorite theme!
                </label>
                <ThemePicker />
            </div>
            <div className="fine" id="copyright">
                <span className="textWhite">samrroyall@gmail.com</span> 
                &nbsp;&nbsp; © Sam Royall. All Rights Reserved.
            </div>
            <div id="poweredBy">
                <span className="fine">Powered by</span>
                {gatsbyIcon}
                {reactIcon}
                {nodeIcon}
            </div>
        </footer>
    )
}