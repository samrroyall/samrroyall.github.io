import React from "react";
import Nav from "../components/nav"
import Footer from "../components/footer"
import "../styles/404.css";

export default function _404() {
    return(
        <>
            <Nav currPage="404" />
            <main>
                <div id="notfound-wrapper">
                    Congrats, you found the 404 page!
                    <span role="img" aria-label="clapping hands">&#128079;</span>
                </div>
            </main>
            <Footer />
        </>
    );
}