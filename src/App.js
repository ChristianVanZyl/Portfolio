import React from "react";
import { Row, Col, Container, Image} from "react-bootstrap";
import Header from './components/Header'
import Footer from './components/Footer'
import pictureOfSelf from "./images/pictureSelf.jpg"

function App() {
  return (
    <>
    <Header />
    <main>
    
   
   
    <Container className="homepageContainer">

    <Container fluid className="introContainer">
    <Row>
    <Col xs={12}>
    <h3>&nbsp;Hi, my name is </h3>
    <h1>Christian van Zyl.</h1>
    <h2>I create web and mobile apps.</h2>
    <p>&nbsp;I’m a software engineer specializing in full-stack development. <br/>&nbsp;I’m currently focusing on expanding my knowledge of mobile <br/> &nbsp;application development.</p>
    </Col>
    
    </Row>
    </Container>

    <Container>
    <p>globe</p>

    </Container>

    <Container className="contentContainer">

    <div id="About" className="aboutDiv">
          <h5><span className="contentNumbers">01.&nbsp;&nbsp;</span>About me</h5>
          <Container>
          <Row>
          <Col xs={6}>
          <p>Hello! My name is Christian and I love solving puzzles. I previously worked in the film industry. Dabbling with coding challenges on the web in my spare time led me to my true passion. I left the industry and three years later I had a BSc in IT behind my name. <br/><br/>
          At university, I met some incredible people. One of my fellow students and I started a company. After a couple of months of hard work, I had completed my first e-commerce marketplace. 
          My main focus these days is to improve and expand my skill-set. Technologies that I’ve worked with include:</p>
          </Col>
          <Col xs={6}><Image fluid rounded
              src={pictureOfSelf}
              alt="selfie"
              width="55%"
              style={{paddingTop: "22px"}}
            /></Col>
          </Row>
          <Row>
          <Col xs={6}>
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
          <Col xs={6}>
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
     <div className="gapBetweenMainDivs"></div>
     <div id="experience" className="experienceDiv">
        <h5><span className="contentNumbers">02.&nbsp;&nbsp;</span>Professional Experience</h5>
        <Container>
          <Row>
          <Col xs={12}>
          <div className="experienceContentDiv">
          <h5 className="experienceHeading">Full Stack Developer <a href="https://www.webuykicks.co.za">@ We Buy Kicks</a></h5>
          <p className="experienceSubHeading">2021 - Present</p>
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
        <div id="portfolio" >
        <h5><span className="contentNumbers">03.&nbsp;&nbsp;</span>Other Projects</h5>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
        </div>
        <div id="contact" >
        <h5><span className="contentNumbers">04.&nbsp;&nbsp;</span>What’s Next?</h5>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
        </div>




      
    </Container>

    


    </Container>
    
  
    </main>
    <Footer /> 
    </>

  );
}

export default App;
