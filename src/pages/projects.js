import React from "react";
import { brandSet } from "@coreui/icons"
import { Link } from "gatsby"
// components
import CoreUIIcon from "../components/CUIIcon"
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Section from "../components/Section";
// icons
import sqlite from "../../static/icons/sqlite-icon"
// images
import klotski from "../../static/images/klotski-solver.png"
import inform from "../../static/images/info-rm.png"

export default function Projects() {
  let flaskIcon = (
    <CoreUIIcon content={brandSet.cibFlask} 
      size="2xl" 
      name="flask logo"
      title="flask"
    />
  );
  let pythonIcon = (
    <CoreUIIcon content={brandSet.cibPython} 
      size="2xl" 
      name="python logo"
      title="python"
    />
  );
  let javascriptIcon = (
    <CoreUIIcon content={brandSet.cibJavascript} 
      size="2xl" 
      name="javascript logo"
      title="javascript"
    />
  );
  let jqueryIcon = (
    <CoreUIIcon content={brandSet.cibJquery} 
      size="2xl" 
      name="jquery logo"
      title="jquery"
    />
  );
  let awsIcon = (
    <CoreUIIcon content={brandSet.cibAmazonAws} 
      size="2xl" 
      name="AWS logo"
      title="AWS"
    />
  );
  let sqliteIcon = (
    <span id="sqliteIconLg" title="sqlite" aria-label="sqlite logo">
      {sqlite}
    </span>
  );
  let reactIcon = (
    <CoreUIIcon content={brandSet.cibReact} 
      size="2xl" 
      name="react logo"
      title="react"
    />
  );
  let nodeIcon = (
    <CoreUIIcon content={brandSet.cibNodeJs} 
      size="2xl" 
      name="node.js logo"
      title="node.js"
    />
  );
  let typescriptIcon = (
    <CoreUIIcon content={brandSet.cibTypescript} 
      size="2xl" 
      name="typescript logo"
      title="typescript"
    />
  );
  let githubIcon = (
    <CoreUIIcon content={brandSet.cibGithub} 
      size="2xl" 
      name="github pages logo"
      title="github pages"
    />
  );

  return (
    <>
    <Nav currPage="projects"/>
    <main>
      <Section 
        pos={1} 
        title={<a href="https://info-rm.io">info-rm</a>}
        background={inform}
        content={
          <div className="sectionBody">
            <div className="block">
              <h2>Description</h2>
              <p><span className="em">info-rm</span> is a stats aggregator for soccer 
              players in Europe's top domestic leagues and international tournaments. See 
              this <Link to="/blog/#searchArticle">blog post</Link> to learn about the search algorithm!</p>
            </div>
            <div className="block">
              <h2>Technologies</h2>
              <div className="iconRow">
                {flaskIcon} 
                {pythonIcon}
                {javascriptIcon}
                {jqueryIcon}
              </div>
              <div className="iconRow">
                {awsIcon}                
                {sqliteIcon}
              </div>
            </div>
          </div>
        }
      />
      <Section 
        pos={2} 
        title={<a href="https://samrroyall.github.io/klotski-solver">Klotski Solver</a>}
        background={klotski}
        content={
          <div className="sectionBody">
            <div className="block">
              <h2>Description</h2>
              <p><span className="em">Klotski Solver</span> is a shortest-path Klotski sliding-block
              puzzle solver. See this <Link to="/blog/#dijkstraArticle">blog post</Link> to learn more about the 
              algorithm behind the solution!</p>
            </div>
            <div className="block">
              <h2>Technologies</h2>                 
              <div className="iconRow">
                {reactIcon}
                {nodeIcon}
                {typescriptIcon}
                {githubIcon}
              </div>
            </div>
          </div>
        }
      />
    </main>
    <Footer currPage="projects/"/>
    </>
  );
}