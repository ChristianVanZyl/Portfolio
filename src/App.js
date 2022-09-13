import React from "react";
import { Row, Col, Container} from "react-bootstrap";
import Header from './components/Header'

function App() {
  return (

    <div className="mainDiv">
    
    <Header />
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

    <div id="home">
          <h1>This is Home section</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
     </div>
        <div id="about">
        <h1>This is About section</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
        </div>
        <div id="contact" >
        <h1>This is Contact section</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
        </div>
        <div id="service" >
        <h1>This is Service section</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
        </div>


    </Container>
    
             
    </div>
   

  );
}

export default App;
