import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from "../../assets/icons/logow.webp";
import './mynavbar.component.css';

const MyNavbar = ()=>{
    return(
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home" className='brand' >
      
      <a href="" className='brand'>Sa.Ra.</a>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link className='navlink' href="#features">Home</Nav.Link>
      <Nav.Link className='navlink' href="#pricing">About</Nav.Link>
      <Nav.Link className='navlink' href="#pricing">Skills</Nav.Link>
      <Nav.Link className='navlink' href="#pricing">Projects</Nav.Link>
      <Nav.Link className='navlink' href="#pricing">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </>
    )
};

export default MyNavbar;
{/* <Navbar.Brand href="#home" className='brand' >
      
      <a href="" className='brand'>Sa.Ra.</a>
  </Navbar.Brand> */}