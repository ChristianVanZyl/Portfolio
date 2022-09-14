import React, { useEffect, useState} from "react";
import { Row, Col, Container, Button, Form, Modal} from "react-bootstrap";
import emailjs from '@emailjs/browser';


const SendModal = () => {

    const [showForm, setShowForm] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [resultMsg, setResultMsg] = useState(null);

    const initialFormData = Object.freeze({
        user_name: "",
        user_email: "",
        message: "",
       
      });

    const [formData, updateFormData] = useState(initialFormData);

    const publicID = process.env.REACT_APP_PUBLIC_ID;
    const userID = process.env.REACT_APP_USER_ID

    useEffect(() => {
       
        if(resultMsg !== null){  
            setShowResult(true)
        }

    }, [resultMsg]);

  

    const sendPopUpHandler = event => {
        event.preventDefault();
        setShowForm(true)
      }

   
    const closePopUpHandler = event => {
        event.preventDefault();
       
        setResultMsg(null);
        setShowForm(false)
        setShowResult(false)
      } 

      const handleChange = event => {
        updateFormData({
          ...formData,
          [event.target.name]: event.target.value.trim()
        });
      };

    const sendEmailHandler = (event) => {
        event.preventDefault();
        setShowForm(false)
        let data = {user_name: formData.name, user_email: formData.email, message: formData.message}
        const templateId = 'template_9rh1rwa';
        emailjs.send(publicID, templateId, data, userID)
        .then((result) => {
          console.log(result)
          setResultMsg("Message delivered. I will get back to you as soon as I can!")
        }).catch((error) => {
            console.log(error)
        setResultMsg("An error occured. Please try again. If the error persists, please contact me directly by emailing me at christianvanzyl@gmail.com.")
        
        });
      } 
 

   
    return (

    <div className="centerButtonDiv"> 
    
        <Modal size="md" centered show={showForm}>
        <Modal.Body>
        <Container fluid>
        <Row>
        <Col xs={12}>

        <Form>
        <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name and surname:</Form.Label>
        <Form.Control required type="name" placeholder="Enter name and surname" name="name" onChange= {handleChange}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email address:</Form.Label>
        <Form.Control required type="email" placeholder="Enter email" name="email" onChange= {handleChange}/>
        </Form.Group>

        <Form.Group controlId="formText">
        <Form.Label>Type your message here</Form.Label>
        <Form.Control required as="textarea" name="message" rows={3}   
        onChange= {handleChange}/>
        </Form.Group>
        
        <Row>
        
        <Col xs={6} style={{textAlign:"center", paddingTop: "20px"}}> 
    
        
        <Button variant="primary" type="submit" onClick={sendEmailHandler} className="messageButton" style={{width: "100%"}}>Send</Button>
   
        </Col>

        <Col xs={6} style={{textAlign:"center", paddingTop: "20px"}}>
       
        <Button variant="secondary" type="button" className="messageButton" style={{width: "100%"}}onClick={closePopUpHandler}>Cancel</Button>
    
        </Col>
       
        </Row>
       
        </Form>
        </Col>
        </Row>
        </Container>
        </Modal.Body>
        </Modal>
        <Modal size="md" centered show={showResult}>
        <Modal.Body>
        <Container fluid>
        <Row>
        <Col xs={12} style={{display:'flex', justifyContent:'center'}}>
        <h3 className="centerText">{resultMsg}</h3>
        </Col>
        </Row>
        <Row>
        <Col xs={12}>
        <div className="centerText">
        <Button variant="secondary" className="messageButton" style={{textAlign: "center", width: "100%"}} onClick={closePopUpHandler}>Close</Button>
        </div>
        </Col>
        </Row>
        </Container>
        </Modal.Body>
        </Modal>
          
        <Button type="button" className="messageButton" onClick={sendPopUpHandler}>Send a Message</Button>
    </div>

    )

}

export default SendModal



