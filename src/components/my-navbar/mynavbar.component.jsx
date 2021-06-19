import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './mynavbar.style.css';
import Scroll from 'react-scroll'
const ScrollLink = Scroll.ScrollLink

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
    
      <Nav.Link className='navlink' href="#home">Home</Nav.Link>
      <Nav.Link className='navlink' href='#about'>About</Nav.Link>
      <Nav.Link className='navlink' href='#skills'>Skills</Nav.Link>
      <Nav.Link className='navlink' href="#projects">Projects</Nav.Link>
      <Nav.Link className='navlink' href="#contact">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </>
    )
};

export default MyNavbar;
