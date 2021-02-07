import React from "react"
import { brandSet, freeSet } from "@coreui/icons"
import { Link } from "gatsby"
import "../styles/Footer.css"
// components
import CoreUIIcon from "./CUIIcon"
import ThemePicker from "./ThemePicker"
import Tooltip from "./Tooltip"

export default function Footer(props) {
    let returnToTopLink = (
        <Link to={"/"+props.currPage} id="returnToTop">
            <CoreUIIcon content={freeSet.cilArrowThickFromBottom}
                size="xl"
                name="return to top"
            />
        </Link>
    )
    let githubIconLink = (
        <a href="https://github.com/samrroyall/">
            <CoreUIIcon content={brandSet.cibGithub} 
                size="xl" 
                name="github" 
            />
        </a>
    );
    let linkedInIconLink = (
        <a href="https://www.linkedin.com/in/samrroyall">
            <CoreUIIcon content={brandSet.cibLinkedin} 
                size="xl" 
                name="linkedin" 
            />
        </a>
    );
    let angellistIconLink = (
        <a href="https://angel.co/u/samrroyall">
            <CoreUIIcon content={brandSet.cibAngellist} 
                size="xl" 
                name="angellist" 
            />
        </a>
    );
    let leetcodeIconLink = (
        <a href="https://leetcode.com/fjallraver/">
            <CoreUIIcon content={brandSet.cibLeetcode} 
                size="xl" 
                name="leetcode" 
            />
        </a>
    );
    let discordIcon = (
        <CoreUIIcon content={brandSet.cibDiscord} 
            id="discord" 
            size="xl" 
            name="discord"
        />
    )
    let gatsbyIcon = (
        <CoreUIIcon content={brandSet.cibGatsby} 
            size="md" 
            name="gatsby logo"
            title="gatsby"
        />
    );
    let reactIcon = (
        <CoreUIIcon content={brandSet.cibReact} 
            size="md" 
            name="react logo"
            title="react"
        />
    );
    let nodeIcon = (
        <CoreUIIcon content={brandSet.cibNodeJs} 
            size="md" 
            name="node.js logo"
            title="node.js"
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