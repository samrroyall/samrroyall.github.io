import React from "react"
import { Link } from "gatsby"
import "../styles/Nav.css"

let Nav = (props) => (
    <nav>
        <ul>
            <li><Link to="/" id="brand">Sam Royall</Link></li>
            <li><Link to="/projects/"><h4>Projects</h4></Link></li>
            <li><Link to="/blog/"><h4>Blog</h4></Link></li>
        </ul>
    </nav>
);

export default Nav