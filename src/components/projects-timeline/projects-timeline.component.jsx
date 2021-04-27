import React from 'react'
import {Timeline,Events,UrlButton,ImageEvent} from '@merc/react-timeline';

import Attendance from '../../assets/img/projects/proj1.webp'
import TODO from '../../assets/img/projects/proj2.webp'
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import L_PYTHON from "../../assets/img/skills/python.svg";
import L_OPENCV from "../../assets/img/skills/opencv.svg";
import Image from 'react-bootstrap/Image'
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP from "../../assets/img/skills/bootstrap-4.svg";

import './projects-timeline.style.css';


const ProjectTimeline = ()=>{

    return(

        <div id='projects'>
        <h1 className="pt-3 text-center font-details-b pb-3 projects">PROJECTS</h1>   
        <Timeline>
        <Events>
        {/* Project: Attendace System */}
        <ImageEvent
            date="December 2020"
            className="text-center titles"
            text="Online Attendance System"
            src={Attendance}
            alt="Online Attendance System">

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
                        <strong>Description:</strong> This is a face recognition based attendance system developed using Python.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Marks attentance of employee using his/her facial biometrics.</li>
                          <li>Developed using OpenCV library in Python.</li>
                          <li>Uses Haarcascade classifiers for detecting faces and LBPH algorithms for training the model</li>
                          <li>GUI implemented using Tkinter module.</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_PYTHON}
                                alt="Python"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Python
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_OPENCV}
                                alt="OpenCV"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              OpenCV
                            </span>
                          </li>
                          
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton className = 'urlBtn' href="https://github.com/sakshi3801/Attendance-System" target="_blank">SOURCE CODE</UrlButton>
              </div>
            </div>
          </ImageEvent>

          <ImageEvent
            date="March 2021"
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
                          <li>Developed using JavaScript, HTML5, CSS3 and Bootstrap.</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
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
                                alt="CSS"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="CSS"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              JavaScript
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP}
                                alt="Bootstrap"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Bootstrap
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
        
                <UrlButton
                  href="https://github.com/sakshi3801/NoteIt"
                  target="_blank"
                >
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