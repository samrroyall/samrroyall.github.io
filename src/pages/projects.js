import React from "react";
import { brandSet } from "@coreui/icons"
import CoreUIIcon from "../components/cuiicon"
import Nav from "../components/nav";
import Section from "../components/section";
import Footer from "../components/footer";
import inform from "../../static/info-rm.png"
import klotski from "../../static/klotski-solver.png"
import sqlite from "../../static/sqlite-icon"

export default function Projects() {
  return (
    <div>
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
                  <p>
                    <span class="em">info-rm</span> &nbsp; is a stats aggregator for club soccer players in
                    Europe's top domestic leagues and international tournaments. See this 
                    &nbsp;<a href="#">blog post</a>&nbsp;
                    to learn about the search algorithm used!                  
                  </p>
                </div>
                <div className="block">
                  <h2>Technologies</h2>
                  <div className="icon-row">
                    <CoreUIIcon content={brandSet.cibFlask} 
                      size="2xl" 
                      name="flask"
                    />
                    <CoreUIIcon content={brandSet.cibPython} 
                      size="2xl" 
                      name="python"
                    />
                    <CoreUIIcon content={brandSet.cibJavascript} 
                      size="2xl" 
                      name="javascript"
                    />
                    <CoreUIIcon content={brandSet.cibJquery} 
                      size="2xl" 
                      name="jquery"
                    />
                </div>
                <div className="icon-row">
                    <CoreUIIcon content={brandSet.cibAmazonAws} 
                      size="2xl" 
                      name="AWS"
                    />
                    <span title="sqlite" aria-label="sqlite logo">
                      {sqlite}
                    </span>
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
                  <p>
                    <span class="em">Klotski Solver</span> &nbsp; is, as the name suggests, 
                    a shortest-path Klotski (sliding-block puzzle) solver. See this
                    &nbsp;<a href="#">blog post</a>&nbsp;
                    to learn more about the solution algorithm!                  
                  </p>
                </div>
                <div className="block">
                  <h2>Technologies</h2>                 
                  <div className="icon-row">
                    <CoreUIIcon content={brandSet.cibReact} 
                      size="2xl" 
                      name="react"
                    />
                    <CoreUIIcon content={brandSet.cibNodeJs} 
                      size="2xl" 
                      name="node.js"
                    />
                    <CoreUIIcon content={brandSet.cibTypescript} 
                      size="2xl" 
                      name="typescript"
                    />
                    <CoreUIIcon content={brandSet.cibGithub} 
                      size="2xl" 
                      name="github pages"
                    />
                  </div>
                </div>
              </div>
            }
          />
          <Section pos={3} title="Project 3" />
          <Section pos={4} title="Project 4" />
        </main>
        <Footer />
    </div>
  );
}