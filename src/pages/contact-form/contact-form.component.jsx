import React from 'react'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./contact-form.style.css";

const Contact = ()=>{

    return(
        <div id='contact'>
        <h1 className="pt-3 text-center font-details-b pb-3 contact">Contact Me</h1>
        <Jumbotron className="contact-jumbotron">
        <Row>
          <Col className="d-flex justify-content-center flex-wrap">
            <div className="m-2">
              <a href="mailto:saakshi030801@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-danger" title="Mail me">
                  <i className="fas fa-envelope-square"></i> Email
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://www.linkedin.com/in/sakshi-ramsinghani/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-primary" title="Connect on Linkedin">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </Button>
              </a>
            </div>
            
            <div className="m-2">
              <a href="https://github.com/sakshi3801" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-dark" title="My other projects">
                  <i className="fab fa-github-square"></i> GitHub
                </Button>
              </a>
            </div>

            <div className="m-2">
              <a href="https://twitter.com/sakshi3801" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-info" title="Tweets are welcomed!">
                  <i className="fab fa-twitter"></i> Twitter
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://www.instagram.com/sakshi__0308/" target="_blank" rel="noopener noreferrer">
                <Button className='insta' variant="outline">
                  <i className="fab fa-instagram"></i> Instagram
                </Button>
              </a>
            </div>
          </Col>
        </Row>
      </Jumbotron>
        </div>
    )
}

export default Contact;