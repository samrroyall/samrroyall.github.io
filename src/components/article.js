import React from "react"
import "../styles/Article.css"

let Article = (props) => (
    <article id={props.id}>
        <h2>{props.title}</h2>
        <div>{props.content}</div>
    </article>
);

export default Article