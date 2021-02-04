import React from "react"
import "../../gatsby-browser"
import { brandSet, freeSet } from '@coreui/icons'
// components
import CoreUIIcon from "../components/cuiicon"
import Footer from "../components/footer"
import Nav from "../components/nav"
import ResumeEntry from "../components/resumeentry"
import Section from "../components/section"
// icons
import aon from "../../static/icons/aon-icon"
import dojo from "../../static/icons/dojo-icon"
import sqlite from "../../static/icons/sqlite-icon"
import tiber from "../../static/icons/tiber-icon"
import uchicago from "../../static/icons/uchicago-icon"
// images
import profile from "../../static/images/profile-cropped.jpg" 

export default function Home() {
  let cPlusPlusIcon = (
    <CoreUIIcon content={brandSet.cibCplusplus} 
      size="2xl" 
      name="c++ logo" 
      title="c++" 
    />
  );
  let pythonIcon = (
    <CoreUIIcon content={brandSet.cibPython} 
      size="2xl" 
      name="python logo"
      title="python"
    />
  );
  let rustIcon = (
    <CoreUIIcon content={brandSet.cibRust} 
      size="2xl" 
      name="rust logo" 
      title="rust" 
    />
  );
  let javascriptIcon = (
    <CoreUIIcon content={brandSet.cibJavascript} 
      size="2xl" 
      name="javascript logo"
      title="javascript"
    />
  );
  let typescriptIcon = (
    <CoreUIIcon content={brandSet.cibTypescript} 
      size="2xl" 
      name="typescript logo"
      title="typescript"
    />
  );
  let gitIcon = (
    <CoreUIIcon content={brandSet.cibGit} 
      size="2xl" 
      name="git logo"
      title="git"
    />
  );
  let linuxIcon = (
    <CoreUIIcon content={brandSet.cibLinux} 
      size="2xl" 
      name="linux logo"
      title="linux"
    />
  );
  let awsIcon = (
    <CoreUIIcon content={brandSet.cibAmazonAws} 
      size="2xl" 
      name="AWS logo"
      title="AWS"
    />
  );
  let postgresIcon = (
    <CoreUIIcon content={brandSet.cibPostgresql} 
      size="2xl" 
      name="postgres logo"
      title="postgres"
    />
  );
  let mysqlIcon = (
    <CoreUIIcon content={brandSet.cibMysql} 
      size="2xl" 
      name="mySQL logo"
      title="mySQL"
    />
  );
  let sqliteIcon = (
    <span title="sqlite" 
      aria-label="sqlite logo">
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
  let gatsbyIcon = (
    <CoreUIIcon content={brandSet.cibGatsby} 
      size="2xl" 
      name="gatsby logo"
      title="gatsby"
    />
  );
  let nodeIcon = (
    <CoreUIIcon content={brandSet.cibNodeJs} 
      size="2xl" 
      name="node.js logo"
      title="node.js"
    />
  );
  let jqueryIcon = (
    <CoreUIIcon content={brandSet.cibJquery} 
      size="2xl" 
      name="jquery logo"
      title="jquery"
    />
  );
  let flaskIcon = (
    <CoreUIIcon content={brandSet.cibFlask} 
      size="2xl" 
      name="flask logo"
      title="flask"
    />
  );
  let djangoIcon = (
    <CoreUIIcon content={brandSet.cibDjango} 
      size="2xl" 
      name="django logo"
      title="django"
    />
  );
  let htmlIcon = (
    <CoreUIIcon content={brandSet.cibHtml5Shield} 
      size="2xl" 
      name="HTML logo"
      title="HTML"
    />
  );
  let cssIcon = (
    <CoreUIIcon content={brandSet.cibCss3Shiled} 
      size="2xl" 
      name="CSS logo"
      title="CSS"
    />
  );
  let bootstrapIcon = (
    <CoreUIIcon content={brandSet.cibBootstrap}
      size="2xl"
      name="bootstrap logo"
      title="bootstrap"
    />    
  )
  let puzzleIcon = (
    <CoreUIIcon content={freeSet.cilPuzzle}
      size="2xl"
      name="puzzle icon"
    /> 
  );    
  let mapIcon = (
    <CoreUIIcon content={freeSet.cilMap}
      size="2xl"
      name="map icon"
    />
  );
  let graphIcon = (
    <CoreUIIcon content={freeSet.cilGraph}
      size="2xl"
      name="graph icon"
    />
  );
  let mugIcon = (
    <CoreUIIcon content={freeSet.cilCoffee}
      size="2xl"
      name="mug icon"
    />
  );
  let gamingControllerIcon = (
    <CoreUIIcon content={freeSet.cilGamepad}
      size="2xl"
      name="gaming controller icon"
    />
  );
  let soccerBallIcon = (
    <CoreUIIcon content={freeSet.cilSoccer}
      size="2xl"
      name="soccer ball icon"
    /> 
  );
  let keyboardIcon = (
    <CoreUIIcon content={freeSet.cilKeyboard}
      size="2xl"
      name="keyboard icon"
    />
  );
  let headphonesIcon = (
    <CoreUIIcon content={freeSet.cilHeadphones}
      size="2xl"
      name="headphones icon"
    />
  );
  let cpuIcon = (
    <CoreUIIcon content={freeSet.cilMemory}
      size="2xl"
      name="CPU icon"
    />
  );
                
  return (
    <>
    <Nav currPage="home" />
    <main>
      <Section 
        pos={0}
        title="About Me"
        content={
          <div className="bio">
            <img src={profile} 
              className="circle" 
              height="300px"
              alt="profile picture" 
            />
            <span className="bio-text">
              <span>My name is Sam Royall. I'm a software engineer based in Chicago,
              IL. Take a look around and get to know me better!</span>
              <br /><br />
              <span className="text-light">Change the colorscheme in the page footer!</span>
              <br /><br />
              <span>Check out my <a href="https://www.overleaf.com/read/zqjpymktwhzf">resume</a>!</span>
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
            icon={uchicago}
            iconLabel="UChicago logo"
            title="University of Chicago"
            subtitle="BS Computer Science, BA Philosophy"
            date={<span>Oct. '15 -<br/>Jun. '19</span>}
          />
          <ResumeEntry
            icon={dojo}
            iconLabel="Coding Dojo logo"
            title="Coding Dojo"
            subtitle="Full-time Software Engineering Bootcamp"
            date="1/21-5/21"
            date={<span>Jan. '21 -<br/>May '21</span>}
          />
          </>
        }
      />
      <Section 
        pos={2} 
        title="Experience" 
        content={
          <>
          <ResumeEntry
            icon={aon}
            iconLabel="AON logo"
            title="Stroz Friedberg, an AON Company"
            subtitle="DFIR Consultant, Cyber Associate"
            date={<span>Aug. '19 -<br/>Dec. '20</span>}
          />
          <ResumeEntry
            icon={aon}
            iconLabel="AON logo"
            title="Stroz Friedberg, an AON Company"
            subtitle="Cyber Summer Associate"
            date={<span>Jun. '18 -<br/>Aug '18</span>}
          />
          <ResumeEntry
            icon={tiber}
            iconLabel="tiber solutions logo"
            title="Tiber Solutions"
            subtitle="Database Intern"
            date="6/17-9/17"
            date={<span>Jun. '17 -<br/>Sep. '17</span>}
          />
          </>
        }
      />
      <Section 
        pos={3}
        title="Skills" 
        content={
          <>
          <div className="block">
            <h2>Languages</h2>
            <div className="icon-row">
              {cPlusPlusIcon}
              {pythonIcon}
              {rustIcon}
            </div>
            <div className="icon-row">
              {javascriptIcon}
              {typescriptIcon}
            </div>
          </div>
          <div className="block">
            <h2>Technologies</h2>
            <div className="icon-row">
              {gitIcon}
              {linuxIcon}
              {awsIcon}
            </div>
            <div className="icon-row">
              {postgresIcon}
              {mysqlIcon}
              {sqliteIcon}
          </div>
          </div>
          <div className="block">
            <h2>Web</h2>
            <div className="icon-row">
              {reactIcon}
              {gatsbyIcon}
              {nodeIcon}
              {jqueryIcon}
            </div>
            <div className="icon-row">
              {flaskIcon}
              {djangoIcon}
            </div>
            <div className="icon-row">
              {htmlIcon}
              {cssIcon}
              {bootstrapIcon}
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
              <li> {puzzleIcon} <span>Solving Problems with Code</span> </li>
              <li> {mapIcon} <span>Hiking</span> </li>
              <li> {graphIcon} <span>Rock Climbing</span> </li>
              <li> {mugIcon} <span>Coffee</span> </li>
              <li> {gamingControllerIcon} <span>Gaming</span> </li>
              <li> {soccerBallIcon} <span>Following & Playing Soccer</span> </li>
              <li> {keyboardIcon} <span>Mechanical Keyboards</span> </li>
              <li> {headphonesIcon} <span>Music</span> </li>
              <li> {cpuIcon} <span>Computer Building</span> </li>
            </ul>
          </div>
        }
      />
    </main>
    <Footer />
    </>
  ) 
}