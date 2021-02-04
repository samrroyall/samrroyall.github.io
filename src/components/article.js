import React from "react"
import "../styles/article.css"

let Article = (props) => (
    <article>
        <h2>{props.title}</h2>
        <div>{props.content}</div>
    </article>
);

export default Article