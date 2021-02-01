import React from "react"
import { Link } from "gatsby"
import "../styles/nav.css"

export default function Nav(props) {
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/" id="brand">Sam Royall</Link>
                </li>
                <li>
                    <Link to="/projects/"><h3>Projects</h3></Link>
                </li>
                <li>
                    <Link to="/blog/"><h3>Blog</h3></Link>
                </li>
            </ul>
        </nav>
    )
}