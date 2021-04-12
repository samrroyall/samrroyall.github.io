import React from "react"
import "../../gatsby-browser"
import { brandSet, freeSet } from '@coreui/icons'
import { Link } from "gatsby"
// components
import CoreUIIcon from "../components/CUIIcon"
import Footer from "../components/Footer"
import Nav from "../components/Nav"
import ResumeEntry from "../components/ResumeEntry"
import Section from "../components/Section"
import SEO from "../components/SEO"
// icons
import aonIcon from "../../static/icons/aon-icon"
import dojoIcon from "../../static/icons/dojo-icon"
import sqliteSVG from "../../static/icons/sqlite-icon"
import tiberIcon from "../../static/icons/tiber-icon"
import uchicagoIcon from "../../static/icons/uchicago-icon"
// images
import profilePicture from "../../static/images/profile-cropped.jpg" 

export default function Home() {
  // language icons
  const cPlusPlusIcon = <CoreUIIcon content={brandSet.cibCplusplus} name="c++ logo" title="c++"  size="3xl"/>;
  const pythonIcon = <CoreUIIcon content={brandSet.cibPython} name="python logo" title="python" size="3xl"/>;
  const javascriptIcon = <CoreUIIcon content={brandSet.cibJavascript} name="javascript logo" title="javascript" size="3xl"/>;
  const typescriptIcon = <CoreUIIcon content={brandSet.cibTypescript} name="typescript logo" title="typescript" size="3xl"/>;
  // technologies icons
  const gitIcon = <CoreUIIcon content={brandSet.cibGit} name="git logo" title="git" size="3xl"/>;
  const linuxIcon = <CoreUIIcon content={brandSet.cibLinux} name="linux logo" title="linux" size="3xl"/>;
  const awsIcon = <CoreUIIcon content={brandSet.cibAmazonAws} name="AWS logo" title="AWS" size="3xl"/>;
  const postgresIcon = <CoreUIIcon content={brandSet.cibPostgresql} name="postgres logo" title="postgres" size="3xl"/>;
  const mysqlIcon = <CoreUIIcon content={brandSet.cibMysql}  name="mySQL logo" title="mySQL" size="3xl"/>;
  const sqliteIcon = <span title="sqlite" id="sqliteIconXl" aria-label="sqlite logo"> {sqliteSVG} </span>;
  const mongoIcon = <CoreUIIcon content={brandSet.cibMongodb}  name="mongo logo" title="mongoDB" size="3xl"/>;
  // web icons
  const reactIcon = <CoreUIIcon content={brandSet.cibReact} name="react logo" title="react" size="3xl"/>;
  const socketIcon = <CoreUIIcon content={brandSet.cibSocketIo} name="socket.io logo" title="socket.io" size="3xl"/>;
  const gatsbyIcon = <CoreUIIcon content={brandSet.cibGatsby} name="gatsby logo" title="gatsby" size="3xl"/>;
  const nodeIcon =  <CoreUIIcon content={brandSet.cibNodeJs} name="node.js logo" title="node.js" size="3xl"/>;
  const jqueryIcon = <CoreUIIcon content={brandSet.cibJquery} size="3xl" name="jquery logo" title="jquery"/>;
  const flaskIcon = <CoreUIIcon content={brandSet.cibFlask} name="flask logo" title="flask" size="3xl"/>;
  const djangoIcon = <CoreUIIcon content={brandSet.cibDjango} name="django logo title="django size="3xl"/>;
  const htmlIcon = <CoreUIIcon content={brandSet.cibHtml5Shield} name="HTML logo" title="HTML" size="3xl"/>;
  const cssIcon = <CoreUIIcon content={brandSet.cibCss3Shiled} name="CSS logo" title="CSS" size="3xl"/>;
  const bootstrapIcon = <CoreUIIcon content={brandSet.cibBootstrap} name="bootstrap logo" title="bootstrap" size="3xl"/>;
  // interests icons
  const puzzleIcon = <CoreUIIcon content={freeSet.cilPuzzle} name="puzzle icon" size="2xl"/> 
  const mapIcon = <CoreUIIcon content={freeSet.cilMap} size="2xl" name="map icon"/>;
  const graphIcon = <CoreUIIcon content={freeSet.cilGraph} size="2xl" name="graph icon"/>;
  const mugIcon = <CoreUIIcon content={freeSet.cilCoffee} size="2xl" name="mug icon"/>;
  const gamingControllerIcon = <CoreUIIcon content={freeSet.cilGamepad} size="2xl" name="gaming controller icon"/>;
  const soccerBallIcon = <CoreUIIcon content={freeSet.cilSoccer} size="2xl" name="soccer ball icon"/>;
  const keyboardIcon = <CoreUIIcon content={freeSet.cilKeyboard} size="2xl" name="keyboard icon"/>;
  const headphonesIcon = <CoreUIIcon content={freeSet.cilHeadphones} size="2xl" name="headphones icon"/>;
  const cpuIcon = <CoreUIIcon content={freeSet.cilMemory} size="2xl" name="CPU icon"/>;

  return (
    <>
    <SEO />
    <Nav currPage="home" />
    <main>
      <Section 
        pos={0}
        title="About Me"
        content={
          <div className="bio">
            <img src={profilePicture} 
              className="circle" 
              alt="profile picture" 
            />
            <span className="bioText">
              <span>My name is Sam Royall. I'm a software engineer based in Chicago,
              IL. Take a look around and get to know me better!</span>
              <br /><br />
              <Link to="/#themePrompt" 
                className="textLight" 
                id="themeLink">
                  Change the colorscheme in the page footer!
              </Link>
              <br /><br />
              <span>Check out my <a href="https://www.overleaf.com/read/zqjpymktwhzf" target="_blank">resume</a>!</span>
            </span>
          </div>
        }
      />
      <Section 
        pos={1} 
        title="Education" 
        content={
          <>
          <ResumeEntry
            icon={dojoIcon}
            iconLabel="Coding Dojo logo"
            title="Coding Dojo"
            subtitle="Full-time Software Engineering Bootcamp"
            date={<span>Jan. '21 -<br/>May '21</span>}
          />
          <ResumeEntry
            icon={uchicagoIcon}
            iconLabel="UChicago logo"
            title="University of Chicago"
            subtitle="BS Computer Science, BA Philosophy"
            date={<span>Oct. '15 -<br/>Jun. '19</span>}
          />
          </>
        }
      />
      <Section 
        pos={2}
        title="Skills" 
        content={
          <>
          <div className="block">
            <h2>Languages</h2>
            <div className="iconRow">
              {cPlusPlusIcon}
              {pythonIcon}
              {javascriptIcon}
              {typescriptIcon}
            </div>
          </div>
          <div className="block">
            <h2>Technologies</h2>
            <div className="iconRow">
              {gitIcon}
              {linuxIcon}
              {awsIcon}
            </div>
            <div className="iconRow">
              {postgresIcon}
              {mysqlIcon}
              {sqliteIcon}
              {mongoIcon}
          </div>
          </div>
          <div className="block">
            <h2>Web</h2>
            <div className="iconRow">
              {reactIcon}
              {djangoIcon}
              {flaskIcon}
            </div>
            <div className="iconRow">
              {socketIcon}
              {gatsbyIcon}
              {nodeIcon}
              {jqueryIcon}
            </div>
            <div className="iconRow">
              {bootstrapIcon}
              {htmlIcon}
              {cssIcon}
            </div>
          </div>
          </>
        }
      />
      <Section 
        pos={3} 
        title="Interests" 
        content={
          <div className="block">
            <ul className="labelledIconList"> 
              <li> {puzzleIcon} <h3>Solving Problems w/ Code</h3> </li>
              <li> {mapIcon} <h3>Hiking</h3> </li>
              <li> {graphIcon} <h3>Rock Climbing</h3> </li>
              <li> {mugIcon} <h3>Coffee</h3> </li>
              <li> {gamingControllerIcon} <h3>Gaming</h3> </li>
              <li> {soccerBallIcon} <h3>The Beautiful Game</h3> </li>
              <li> {keyboardIcon} <h3>Mechanical Keyboards</h3> </li>
              <li> {headphonesIcon} <h3>Music</h3> </li>
              <li> {cpuIcon} <h3>Computer Building</h3> </li>
            </ul>
          </div>
        }
      />
      <Section 
        pos={4} 
        title="Experience" 
        content={
          <>
          <ResumeEntry
            icon={aonIcon}
            iconLabel="AON logo"
            title="Stroz Friedberg, an AON Company"
            subtitle="DFIR Consultant, Cyber Associate"
            date={<span>Aug. '19 -<br/>Dec. '20</span>}
          />
          <ResumeEntry
            icon={aonIcon}
            iconLabel="AON logo"
            title="Stroz Friedberg, an AON Company"
            subtitle="Cyber Summer Associate"
            date={<span>Jun. '18 -<br/>Aug '18</span>}
          />
          <ResumeEntry
            icon={tiberIcon}
            iconLabel="tiber solutions logo"
            title="Tiber Solutions"
            subtitle="Database Intern"
            date="6/17-9/17"
            date={<span>Jun. '17 -<br/>Sep. '17</span>}
          />
          </>
        }
      />
    </main>
    <Footer currPage=""/>
    </>
  ) 
}