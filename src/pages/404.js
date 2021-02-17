import React from "react";
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import "../styles/404.css";
import SEO from "../components/SEO";

export default function _404() {
    return(
        <>
            <SEO title="Sam Royall - Oopsie!" />
            <Nav currPage="404" />
            <main>
                <div id="notFoundWrapper">
                    Congrats, you found the 404 page!
                    <span role="img" aria-label="clapping hands">&#128079;</span>
                </div>
            </main>
            <Footer currPage="404/"/>
        </>
    );
}