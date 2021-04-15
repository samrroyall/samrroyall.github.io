import React from "react";
import "../styles/Article.css";

const Article = ({pos, id, title, content}) => (
    <article className={(pos === 0 ? "mostRecentPost" : "")} id={id}>
        <h2>{title}</h2>
        <div>{content}</div>
    </article>
);

export default Article;