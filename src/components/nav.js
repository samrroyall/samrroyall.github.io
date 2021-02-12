import React from "react"
import { Link } from "gatsby"
import "../styles/Nav.css"

let Nav = (props) => (
    <nav>
        <ul>
            <li><Link to="/" id="brand">Sam Royall</Link></li>
            <li><Link to="/projects/">Projects</Link></li>
            <li><Link to="/blog/">Blog</Link></li>
        </ul>
    </nav>
);

export default Nav