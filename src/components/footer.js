import React from "react"
import { brandSet } from '@coreui/icons'
import CoreUIIcon from "../components/cuiicon"
import Tooltip from "./tooltip"
import ThemePicker from "./themepicker"
import "../styles/footer.css"

export default function Footer() {
    return(
        <footer>
            <div id="socials-list">
                <a href="https://github.com/samrroyall/">
                    <CoreUIIcon content={brandSet.cibGithub} 
                        size="xl" 
                        name="github" 
                    />
                </a>
                <a href="https://www.linkedin.com/in/samrroyall">
                    <CoreUIIcon content={brandSet.cibLinkedin} 
                        size="xl" 
                        name="linkedin" 
                    />
                </a>
                <a href="https://angel.co/u/samrroyall">
                    <CoreUIIcon content={brandSet.cibAngellist} 
                        size="xl" 
                        name="angellist" 
                    />
                </a>
                <a href="https://leetcode.com/fjallraver/">
                    <CoreUIIcon content={brandSet.cibLeetcode} 
                        size="xl" 
                        name="leetcode" 
                    />
                </a>
                <Tooltip 
                    content={
                        <CoreUIIcon content={brandSet.cibDiscord} 
                            id="discord" 
                            size="xl" 
                            name="discord"
                        />
                    }
                    copyText="fjallraver#2825"
                    displayText="Copied!"
                />
            </div>
            <div>
                <span className="fine text-white" id="theme-prompt">
                    Choose your favorite theme!
                </span>
                <ThemePicker />
            </div>
            <div className="fine" id="copyright">
                <span className="text-white">samrroyall@gmail.com</span> 
                &nbsp;&nbsp; © Sam Royall. All Rights Reserved.
            </div>
            <div id="powered-by">
                <span className="fine text-white">Powered by</span>
                <CoreUIIcon content={brandSet.cibGatsby} size="md" name="gatsby"/>
                <CoreUIIcon content={brandSet.cibReact} size="md" name="react"/>
                <CoreUIIcon content={brandSet.cibNodeJs} size="md" name="node.js"/>
            </div>
        </footer>
    )
}