import React from "react"
import "../../gatsby-browser"
import { brandSet, freeSet } from '@coreui/icons'
import CoreUIIcon from "../components/cuiicon"
import Entry from "../components/entry"
import Footer from "../components/footer"
import Nav from "../components/nav"
import Section from "../components/section"
import aon from "../../static/aon-icon"
import dojo from "../../static/dojo-icon"
import sqlite from "../../static/sqlite-icon"
import tiber from "../../static/tiber-icon"
import uchicago from "../../static/uchicago-icon"

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
                icon={uchicago}
                iconLabel="UChicago logo"
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
                icon={dojo}
                iconLabel="Coding Dojo logo"
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
                icon={aon}
                iconLabel="AON logo"
                title="Stroz Friedberg, an AON Company"
                subtitle="Consultant, DFIR"
                date={<span>Jun. '20 -<br/>Dec. '20</span>}
                content="Default description Default description Default description 
                Default description Default description Default description Default description."
              />
              <Entry
                icon={aon}
                iconLabel="AON logo"
                title="Stroz Friedberg, an AON Company"
                subtitle="Cyber Associate"
                date={<span>Aug. '19 -<br/>May '20</span>}
                content="Default description Default description Default description 
                Default description Default description Default description Default description."
              />
              <Entry
                icon={aon}
                iconLabel="AON logo"
                title="Stroz Friedberg, an AON Company"
                subtitle="Cyber Summer Associate"
                date={<span>Jun. '18 -<br/>Aug '18</span>}
                content="Default description Default description Default description 
                Default description Default description Default description Default description."
              />
              <Entry
                icon={tiber}
                iconLabel="tiber solutions logo"
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
                    name="c++ logo" 
                    title="c++" 
                  />
                  <CoreUIIcon content={brandSet.cibPython} 
                    size="2xl" 
                    name="python logo"
                    title="python"
                  />
                  <CoreUIIcon content={brandSet.cibRust} 
                    size="2xl" 
                    name="rust logo" 
                    title="rust" 
                  />
                </div>
                <div className="icon-row">
                  <CoreUIIcon content={brandSet.cibJavascript} 
                    size="2xl" 
                    name="javascript logo"
                    title="javascript"
                  />
                  <CoreUIIcon content={brandSet.cibTypescript} 
                    size="2xl" 
                    name="typescript logo"
                    title="typescript"
                  />
                </div>
              </div>
              <div className="block">
                <h2>Technologies</h2>
                <div className="icon-row">
                  <CoreUIIcon content={brandSet.cibGit} 
                    size="2xl" 
                    name="git logo"
                    title="git"
                  />
                  <CoreUIIcon content={brandSet.cibLinux} 
                    size="2xl" 
                    name="linux logo"
                    title="linux"
                  />
                  <CoreUIIcon content={brandSet.cibAmazonAws} 
                    size="2xl" 
                    name="AWS logo"
                    title="AWS"
                  />
                </div>
                <div className="icon-row">
                  <CoreUIIcon content={brandSet.cibPostgresql} 
                    size="2xl" 
                    name="postgres logo"
                    title="postgres"
                  />
                  <CoreUIIcon content={brandSet.cibMysql} 
                    size="2xl" 
                    name="mySQL logo"
                    title="mySQL"
                  />
                  <span title="sqlite" 
                    aria-label="sqlite logo">
                    {sqlite}
                  </span>
                </div>
              </div>
              <div className="block">
                <h2>Web</h2>
                <div className="icon-row">
                  <CoreUIIcon content={brandSet.cibReact} 
                    size="2xl" 
                    name="react logo"
                    title="react"
                  />
                  <CoreUIIcon content={brandSet.cibGatsby} 
                    size="2xl" 
                    name="gatsby logo"
                    title="gatsby"
                  />
                  <CoreUIIcon content={brandSet.cibNodeJs} 
                    size="2xl" 
                    name="node.js logo"
                    title="node.js"
                  />
                  <CoreUIIcon content={brandSet.cibJquery} 
                    size="2xl" 
                    name="jquery logo"
                    title="jquery"
                  />
                </div>
                <div className="icon-row">
                  <CoreUIIcon content={brandSet.cibFlask} 
                    size="2xl" 
                    name="flask logo"
                    title="flask"
                  />
                  <CoreUIIcon content={brandSet.cibDjango} 
                    size="2xl" 
                    name="django logo"
                    title="django"
                  />
                </div>
                <div className="icon-row">
                  <CoreUIIcon content={brandSet.cibHtml5Shield} 
                    size="2xl" 
                    name="HTML logo"
                    title="HTML"
                  />
                  <CoreUIIcon content={brandSet.cibCss3Shiled} 
                    size="2xl" 
                    name="CSS logo"
                    title="CSS"
                  />
                  <CoreUIIcon content={brandSet.cibBootstrap}
                    size="2xl"
                    name="bootstrap logo"
                    title="bootstrap"
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
            <div className="block">
              <ul className="labelled-icon-list">
                <li>
                  <CoreUIIcon content={freeSet.cilPuzzle}
                    size="2xl"
                    name="puzzle icon"
                  /> 
                  <span>Solving Problems with Code</span>
                </li>
                <li>
                  <CoreUIIcon content={freeSet.cilMap}
                    size="2xl"
                    name="map icon"
                  /> 
                  <span>Hiking</span>
                </li>
                <li>
                  <CoreUIIcon content={freeSet.cilGraph}
                    size="2xl"
                    name="graph icon"
                  />
                  <span>Rock Climbing</span>
                </li>
                <li>
                  <CoreUIIcon content={freeSet.cilCoffee}
                    size="2xl"
                    name="mug icon"
                  />
                  <span>Coffee</span>
                </li>
                <li>
                  <CoreUIIcon content={freeSet.cilSoccer}
                    size="2xl"
                    name="soccer ball icon"
                  /> 
                  <span>Following and Playing Soccer</span>
                </li>
                <li>
                  <CoreUIIcon content={freeSet.cilKeyboard}
                    size="2xl"
                    name="keyboard icon"
                  />
                  <span>Mechanical Keyboards</span>
                </li>
                <li>
                  <CoreUIIcon content={freeSet.cilHeadphones}
                    size="2xl"
                    name="headphones icon"
                  />
                  <span>Music</span>
                </li>
                <li>
                  <CoreUIIcon content={freeSet.cilMemory}
                    size="2xl"
                    name="CPU icon"
                  />
                  <span>Computer Building</span>
                </li>
                <li>
                  <CoreUIIcon content={freeSet.cilGamepad}
                    size="2xl"
                    name="gaming controller icon"
                  />
                  <span>Gaming</span>
                </li>
              </ul>
            </div>
          }
        />
      </main>
      <Footer />
    </div>
  ) 
}