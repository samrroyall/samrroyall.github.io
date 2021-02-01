import React from "react"
import "../styles/article.css"

export default function Article(props) {
    return (
        <article>
            <h2>{props.title}</h2>
            <div>{props.content}</div>
        </article>
    )
}