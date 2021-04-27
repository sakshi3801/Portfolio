import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import sakshi1 from '../../assets/img/profile/sakshi1.webp'
import './about.style.css'
import Button from "react-bootstrap/Button";

const About = ()=>{

    return(
        <div id='about'>
        <div className='about'>
        <h1 id='heading' className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="sakshi1 justify-content-end" alt="profile" src={sakshi1} thumbnail fluid />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                Hi there! I am <strong>&nbsp;Sakshi Ramsinghani</strong>
                <br />A computer science undergraduate at Indian Institute of Information Technology Pune. I'm a front end web developer having good grasp over React JS, Javascript, HTML and CSS.
                <br />
                I possess good problem solving skills. I am well versed with data structures and algorithms and I enjoy solving challenging algorithmic problems.
                <br />
                I'm also interested in computer vision and exploring it as much as I can.
                <br /><br/>
                My hobbies include painting and reading. I'm an avid reader and love reading fictional novels. The Alchemist and Think And Grow Rich are among my best reads.
                <br /> <br />
                <Col className="d-flex justify-content-center ">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://drive.google.com/file/d/1pnoOYLjPnieYsUL299HanaQs3ARfimbM/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/sakshi3801" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/sakshi-ramsinghani/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        </div>
        </div>
        
    )
};

export default About; 