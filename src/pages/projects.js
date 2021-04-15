import React from "react";
import { brandSet } from "@coreui/icons";
import { Link } from "gatsby";
// components
import CoreUIIcon from "../components/CUIIcon";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Section from "../components/Section";
import SEO from "../components/SEO";
// icons
import sqlite from "../../static/icons/sqlite-icon";
// images
import klotski from "../../static/images/klotski-solver.png";
import inform from "../../static/images/info-rm.png";
import notype from "../../static/images/notype.png"
import cocode from "../../static/images/cocode.png"

export default function Projects() {
  let djangoIcon = <CoreUIIcon content={brandSet.cibDjango} size="2xl" name="django logo" title="django"/>;
  let pythonIcon = <CoreUIIcon content={brandSet.cibPython} size="2xl" name="python logo" title="python"/>;
  let jsIcon = <CoreUIIcon content={brandSet.cibJavascript} size="2xl" name="javascript logo" title="javascript"/>;
  let jqueryIcon = <CoreUIIcon content={brandSet.cibJquery} size="2xl" name="jquery logo" title="jquery"/>
  let awsIcon = <CoreUIIcon content={brandSet.cibAmazonAws} size="2xl" name="AWS logo" title="AWS"/>;
  const socketIcon = <CoreUIIcon content={brandSet.cibSocketIo} name="socket.io logo" title="socket.io" size="2xl"/>;
  const mongoIcon = <CoreUIIcon content={brandSet.cibMongodb}  name="mongo logo" title="mongoDB" size="2xl"/>;
  let sqliteIcon = <span id="sqliteIconLg" title="sqlite" aria-label="sqlite logo">{sqlite}</span>;
  let reactIcon = <CoreUIIcon content={brandSet.cibReact} size="2xl" name="react logo" title="react"/>;
  let nodeIcon = <CoreUIIcon content={brandSet.cibNodeJs} size="2xl" name="node.js logo" title="node.js"/>;
  let typescriptIcon = <CoreUIIcon content={brandSet.cibTypescript} size="2xl" name="typescript logo" title="typescript"/>;
  let githubIcon = <CoreUIIcon content={brandSet.cibGithub} size="2xl" name="github pages logo" title="github pages"/>;

  return (
    <>
    <SEO title="Sam Royall - Projects" />
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
              players in Europe's top domestic leagues and international tournaments.</p>
            </div>
            <div className="block">
              <h2>Technologies</h2>
              <div className="iconRow">
                {djangoIcon} 
                {pythonIcon}
                {jqueryIcon}
                {sqliteIcon}
                {awsIcon}                
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
      <Section 
        pos={3} 
        title={<a href="https://notype.io">u ain't got no type</a>}
        background={notype}
        content={
          <div className="sectionBody">
            <div className="block">
              <h2>Description</h2>
              <p><span className="em">u ain't got no type</span> is a simple but elegant typing test.
              Compete against other users to see who can type at the highest WPM!
              </p>
            </div>
            <div className="block">
              <h2>Technologies</h2>                 
              <div className="iconRow">
                {djangoIcon} 
                {pythonIcon}
                {jqueryIcon}
                {sqliteIcon}
                {awsIcon}                
              </div>
            </div>
          </div>
        }
      />
      <Section 
        pos={4} 
        title={<a href="https://co-code.net">CoCODE</a>}
        background={cocode}
        content={
          <div className="sectionBody">
            <div className="block">
              <h2>Description</h2>
              <p><span className="em">CoCODE</span> is a collaborative code editor, allowing users to
              work on a shared document with real-time updates and <span className="em">prismJS</span> syntax 
              highlighting through the power of <span className="em">socket.io</span>.
              </p>
            </div>
            <div className="block">
              <h2>Technologies</h2>                 
              <div className="iconRow">
                {reactIcon}
                {nodeIcon}
                {socketIcon}
                {mongoIcon}
                {awsIcon}                
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