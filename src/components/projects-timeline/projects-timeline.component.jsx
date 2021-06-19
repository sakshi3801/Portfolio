import React from 'react'
import {Timeline,Events,UrlButton,ImageEvent} from '@merc/react-timeline';
import TODO from '../../assets/img/projects/todo.png'
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import L_REACT from "../../assets/img/skills/react.svg";
import L_REACT_ROUTER from "../../assets/img/skills/react-router.svg";
import L_REACT_BOOTSTRAP from "../../assets/img/skills/react-bootstrap.svg";
import Image from 'react-bootstrap/Image'
import L_STYLED_COMPONENTS from "../../assets/img/skills/styled-components.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import Tuneify from '../../assets/img/projects/Tuneify.jpg'
import PORTFOLIO from '../../assets/img/projects/portfolio.png'


import './projects-timeline.style.css';


const ProjectTimeline = ()=>{

    return(

        <div id='projects'>
        <h1 className="pt-3 text-center font-details-b pb-3 projects">PROJECTS</h1>   
        <Timeline>
        <Events>
        {/* Project: Tuneify */}
        <ImageEvent
            date="May 2021"
            className="text-center titles"
            text="Tuneify"
            src={Tuneify}
            alt="Tuneify">

            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card className='cardBody'>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle> 
                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is a background noise generator designed to help people relax, focus, and tune out unpleasant sounds from your environment.
.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Generates soothing and peaceful background sounds, hence enhancing one's productivity.</li>
                          <li>Provides various categories of sounds including Nature, Weather, etc</li>
                          <li>Built using React JS, React Router, HTML5 and CSS3.</li>
                          <li>React Bootstrap and Material UI to implement the beautiful user interface.</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React JS"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              React JS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT_ROUTER}
                                alt="React Router"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              React Router
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT_BOOTSTRAP}
                                alt="React Bootstrap"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              React Bootstrap
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                        </ul>

                        
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center" id='proj'>
                <UrlButton className = 'urlBtn' href="https://tuneifyapp.herokuapp.com/" target="_blank">SEE LIVE</UrlButton>
            
                <UrlButton className = 'urlBtn' href="https://github.com/sakshi3801/Tuneify" target="_blank">SOURCE CODE</UrlButton>
              </div>
            </div>

            
          </ImageEvent>

          <ImageEvent
            date="April 2021"
            className="text-center titles"
            text="TODOs List"
            src={TODO}
            alt="TODOs List"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is an efficient and easy to use TODOs list.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Keeps track of your TODOs.</li>
                          <li>Developed using React JS, HTML5, CSS3 and React Bootstrap.</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                        <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React JS"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              React JS
                            </span>
                          </li>
                          <li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT_BOOTSTRAP}
                                alt="React Bootstrap"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              React Bootstrap
                            </span>
                          </li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
              <UrlButton className = 'urlBtn' href="https://react-todos-list.herokuapp.com/" target="_blank">SEE LIVE</UrlButton>
                <UrlButton
                  href="https://github.com/sakshi3801/React-TODOs-List" target="_blank">
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
          <ImageEvent
            date="April 2021"
            className="text-center titles"
            text="Portfolio"
            src={PORTFOLIO}
            alt="Portfolio"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is my portfolio website.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Developed using React JS, HTML5, CSS3, React Bootstrap and Styled Components.</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                        <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React JS"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              React JS
                            </span>
                          </li>
                          <li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT_BOOTSTRAP}
                                alt="React Bootstrap"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              React Bootstrap
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_STYLED_COMPONENTS}
                                alt="Styled Components"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Styled Components
                            </span>
                          </li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
              <UrlButton className = 'urlBtn' href="https://sakshi-ramsinghani.herokuapp.com/" target="_blank">SEE LIVE</UrlButton>
                <UrlButton
                  href="https://github.com/sakshi3801/portfolio" target="_blank">
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>           
          </Events>
          </Timeline>
          </div>
         
    )
}

export default ProjectTimeline;