import React from "react"
import "../../gatsby-browser"
import { brandSet } from '@coreui/icons'
import CoreUIIcon from "../components/cuiicons"
import Entry from "../components/entry"
import Footer from "../components/footer"
import Nav from "../components/nav"
import Section from "../components/section"
import sqlite from "../../static/sqlite-white.ico"

export default function Home() {
  return (
    <div>
      <Nav currPage="home" />
      <main>
        <Section 
          pos={1} 
          title="Education" 
          content={
            <>
              <Entry
                title="University of Chicago"
                subtitle="BS Computer Science, BA Philosophy"
                date={<span>Oct. '15 -<br/>Jun. '19</span>}
                content={
                  < >
                    <ul>
                      <li>GPA: 3.44/4.0 (<span class="em">Dean's List 15/16, 16/17, 17/18, 18/19</span>)</li>
                      <li>Curriculum:</li>
                      <ul>
                        <li>...</li>
                      </ul>
                    </ul>
                  </>
                }
              />
              <Entry
                title="Coding Dojo"
                subtitle="Full-time Software Engineering Bootcamp"
                date="1/21-5/21"
                date={<span>Jan. '21 -<br/>May '21</span>}
                content={
                  <ul>
                    <li> GPA/Grades: ???</li>
                    <li> Curriculum:</li>
                    <ul>
                      <li>Web Fundamentals: HTML, CSS, JS, JQuery</li>
                      <li>Stack 1: Python, Django/Flask, MySQL</li>
                      <li>Stack 2: MongoDB, ExpressJS, ReactJS, NodeJS</li>
                      <li>Stack 3: C#, .NET, Postgres</li>
                    </ul>
                  </ul>
                }              
              />
            </>
          }
        />
        <Section 
          pos={2} 
          title="Experience" 
          content={
            <>
              <Entry
                title="Stroz Friedberg"
                subtitle="Consultant, Digital Forensics/Incident Response"
                date={<span>Jun. '20 -<br/>Dec. '20</span>}
                content="Default description Default description Default description 
                Default description Default description Default description Default description."
              />
              <Entry
                title="Stroz Friedberg"
                subtitle="Cyber Associate"
                date={<span>Aug. '19 -<br/>May '20</span>}
                content="Default description Default description Default description 
                Default description Default description Default description Default description."
              />
              <Entry
                title="Stroz Friedberg"
                subtitle="Cyber Summer Associate"
                date={<span>Jun. '18 -<br/>Aug '17</span>}
                content="Default description Default description Default description 
                Default description Default description Default description Default description."
              />
              <Entry
                title="Tiber Solutions"
                subtitle="Database Intern"
                date="6/17-9/17"
                date={<span>Jun. '17 -<br/>Sep. '17</span>}
                content="Default description Default description Default description 
                Default description Default description Default description Default description."
              />
            </>
          }
        />
        <Section 
          pos={3}
          title="Skills" 
          content={
            < >
              <div className="block">
                <h2>Languages</h2>
                <div className="icon-row">
                  <CoreUIIcon content={brandSet.cibCplusplus} 
                    size="2xl" 
                    name="c++" 
                  />
                  <CoreUIIcon content={brandSet.cibPython} 
                    size="2xl" 
                    name="python"
                  />
                  <CoreUIIcon content={brandSet.cibRust} 
                    size="2xl" 
                    name="rust" 
                  />
                </div>
                <div className="icon-row">
                  <CoreUIIcon content={brandSet.cibJavascript} 
                    size="2xl" 
                    name="javascript"
                  />
                  <CoreUIIcon content={brandSet.cibTypescript} 
                    size="2xl" 
                    name="typescript"
                  />
                </div>
              </div>
              <div className="block">
                <h2>Technologies</h2>
                <div className="icon-row">
                  <CoreUIIcon content={brandSet.cibGit} 
                    size="2xl" 
                    name="git"
                  />
                  <CoreUIIcon content={brandSet.cibLinux} 
                    size="2xl" 
                    name="linux"
                  />
                  <CoreUIIcon content={brandSet.cibAmazonAws} 
                    size="2xl" 
                    name="AWS"
                  />
                </div>
                <div className="icon-row">
                  <CoreUIIcon content={brandSet.cibPostgresql} 
                    size="2xl" 
                    name="postgres"
                  />
                  <CoreUIIcon content={brandSet.cibMysql} 
                    size="2xl" 
                    name="mySQL"
                  />
                  <img src={sqlite}
                    className="icon"
                    height="32px"
                    title="sqlite"
                    alt="sqlite"
                  />
                </div>
              </div>
              <div className="block">
                <h2>Web</h2>
                <div className="icon-row">
                  <CoreUIIcon content={brandSet.cibReact} 
                    size="2xl" 
                    name="react"
                  />
                  <CoreUIIcon content={brandSet.cibGatsby} 
                    size="2xl" 
                    name="gatsby"
                  />
                  <CoreUIIcon content={brandSet.cibNodeJs} 
                    size="2xl" 
                    name="node.js"
                  />
                  <CoreUIIcon content={brandSet.cibJquery} 
                    size="2xl" 
                    name="jquery"
                  />
                </div>
                <div className="icon-row">
                  <CoreUIIcon content={brandSet.cibFlask} 
                    size="2xl" 
                    name="flask"
                  />
                  <CoreUIIcon content={brandSet.cibDjango} 
                    size="2xl" 
                    name="django"
                  />
                </div>
                <div className="icon-row">
                  <CoreUIIcon content={brandSet.cibHtml5} 
                    size="2xl" 
                    name="HTML"
                  />
                  <CoreUIIcon content={brandSet.cibCss3Shiled} 
                    size="2xl" 
                    name="CSS"
                  />
                  <CoreUIIcon content={brandSet.cibBootstrap}
                    size="2xl"
                    name="bootstrap"
                  />
                </div>
              </div>
            </>
          }
        />
        <Section 
          pos={4} 
          title="Interests" 
          content={
            <div class="block">
              <h2>To-Do</h2>
              <span>...</span>
            </div>
          }
        />
      </main>
      <Footer />
    </div>
  ) 
}
