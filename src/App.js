import React from "react";
import { Row, Col, Container} from "react-bootstrap";
import Header from './components/Header'
import Footer from './components/Footer'
import SendModal from './components/SendModal'
import Player from './components/Player'
import SlideShow from './components/SlideShow'
import Cards from './components/Cards'
import ImageLoad from './components/ImageLoad'
import LeftLinksBar from './components/LeftLinksBar'
import Fade from 'react-reveal/Fade';
import pictureOfSelf from "./images/pictureSelf.jpg"
import {isMobile} from 'react-device-detect';

function App() {

  const picOfSelf = {
    width: "70%",
    src: pictureOfSelf,
    alt: "selfie"
  }

  const picOfSelfMobile = {
    width: "100%",
    src: pictureOfSelf,
    alt: "selfie"
  }

  return (
  
    

    <main >
    <Header />
 <LeftLinksBar/>
    <Container className="homepageContainer">
    <Container fluid className="introContainer">
    <Row>
    <Col sm={12}>
    <Fade bottom>
    <h3>&nbsp;Hi, my name is </h3>
    <h1>Christian van Zyl.</h1>
    <h2>I create web and mobile apps.</h2>
    <p>I’m a software engineer specializing in full-stack development. <br/>I’m currently focusing on expanding my knowledge of mobile <br/>application development.</p>
    </Fade>
    </Col>
    </Row>
    </Container>
 
<div id="about" className="gapBetweenMainDivsAbout"></div>
    <Container className="contentContainer">
  <Fade>
    <div className="aboutDiv">     
          <Container>
          <h5><span className="contentNumbers">01.&nbsp;&nbsp;</span>About me</h5>
          <Row>
          <Col sm={6}>
          <p>Hello! My name is Christian and I love solving puzzles. I previously worked in the film industry. Dabbling with coding challenges on the web in my spare time led me to my true passion. I left the industry and three years later I had a BSc in IT behind my name. <br/><br/>
          At university, I met some incredible people. One of my fellow students and I started a company. After a couple of months of hard work, I had completed my first e-commerce marketplace. 
          My main focus these days is to improve and expand my skill-set. Technologies that I’ve worked with include:</p>
          </Col>
          <Col sm={6}>
          <div className="imagePad">{isMobile ? <ImageLoad image= {picOfSelfMobile} /> : <ImageLoad image= {picOfSelf} />}
          </div>
           </Col>
          </Row>
          <Row>
          <Col sm={6}>
          <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript (ES6+)</li>
          <li>jQuery</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>Java</li>
          <li>PHP</li>
          </ul>
          </Col>
          <Col sm={6}>
          <ul>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>Github</li>
          <li>CircleCI</li>
          <li>Nginx</li>
          </ul>
          </Col>
          </Row>
          </Container>
     </div>
  </Fade>

  <Fade>
     <div id="experience" className="gapBetweenMainDivsExp"></div>
     <div  className="experienceDiv">
        <h5 className="centerMainHeading"><span className="contentNumbers">02.&nbsp;&nbsp;</span>Professional Experience</h5>
        <Container>
          <Row>
          <Col sm={12}>
          <div className="experienceContentDiv">
          <h5 className="experienceHeading">Full Stack Developer <a href="https://www.webuykicks.co.za">@ We Buy Kicks</a></h5>
          <p className="experienceSubHeading">December 2021 - Present</p>
          <ul>
          <li>Worked with a designer to create an e-commerce market platform that allows users to place bids and asks on products (completely anonymous), as well as buying/selling directly to other users. </li>
          <li>The website is mostly automated. This includes various processes such as placing bids/asks, buying/selling, fines issued, registration linking users with the payment provider, profile updates as well as an automated database updating bid/ask expiration and account related updates. </li>
          <li>The administrators have access to a backend GUI that allows for product uploading, updating accounts and dealing with orders. The interface was designed to be easy and efficient to use -resulting in a system that facilitates product authentication approval and final order processing with minimal user input.   </li>
          </ul>
          </div>
          </Col>
       </Row>
       </Container>

    </div>
  </Fade>
    <div  id="portfolio" className="gapBetweenMainDivsPort"></div>

  <Fade>
    <div className="portfolioDiv">
        <h5 className="centerMainHeading"><span className="contentNumbers">03.&nbsp;&nbsp;</span>Other Projects</h5>
        <Container className="borderPlay">
        <Row>
        <Col sm={12}>
        <div className="portfolioContentDiv">
        <h5 className="portFolioHeading"><span style={{color:"#ECB365" }}>Play Therapy</span> is an e-commerce website that I designed and built.</h5>
        <div className="borderSlideShow">
        <SlideShow/>
        </div>
        </div>
        </Col>
        </Row>
        <div className="gapBetweenPortFolioDivs"></div>
        <Row>
        <Col sm={12}>
        <div className="videoContentDiv">
        <h5 className="portFolioHeading" >A short presentation of the website!</h5>
        <Player />
        <h5 className="portFolioHeading" >Follow <a href="https://github.com/ChristianVanZyl/Play-Therapy">this link</a> to view the github repository</h5>
        </div>
        </Col>
        </Row>
        </Container>
        <div className="gapBetweenPortFolioProjects"></div>
        <Container>
        <Row>
        <Col sm={12}>
        <div className="portfolioContentDiv">
        <h5 className="portFolioHeadingAir" style={{ paddingBottom: "90px"}}><span style={{color:"#ECB365" }}>IndizaSA</span> is a university project completed in 2021. The system is comprised of two front-end applications, as well as a Java server. </h5>
        </div>
        </Col>
        </Row>
        <Row>
        <Col sm={12}>
        <Cards/>
        </Col>
        </Row>
        <Row>
        <Col sm={12}>
        <div className="portfolioContentDiv">
        <h5 className="portFolioHeading" >Follow <a href="https://github.com/ChristianVanZyl/IndizaSA-App">this link</a> to view the github repository</h5>
        </div>
        </Col>
        </Row>
        </Container>
        </div>
    </Fade>
    
    <Fade>
        <div  id="contact"  className="gapBetweenMainDivsPort"></div>
        <div className="portfolioDiv">
        <h5 className="centerMainHeading"><span className="contentNumbers">04.&nbsp;&nbsp;</span>What’s Next?</h5>
        <h2 className="getInTouchHeading">Get in Touch</h2> 
        <Container className="bottomContainer" >
        <Row>
        <Col sm={12}>
        <p className="getInTouchPara">I’m currently looking for new opportunities to expand my skill-set. Feel free to leave a message and I’ll get back to you!</p>
        </Col>
        </Row>
        <Row>
        <Col sm={12}>
         <SendModal/>
        </Col>
        </Row>
        </Container> 
        </div>
      </Fade>
    </Container>
    <Fade>
    <Footer /> 
    </Fade>
    </Container>
    
    </main>
 

  );
}

export default App;
