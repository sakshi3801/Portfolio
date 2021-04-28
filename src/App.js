import React from 'react'
import Fade from "react-reveal/Fade"; 
import './App.css';
import MyNavbar from './components/my-navbar/mynavbar.style.jsx';
import MyCarousal from './components/my-carousal/my-carousal.component.jsx';
import TitleMessage from './components/title-msg/title-msg.component.jsx';
import About from './pages/about/about.component'
import BgIm from './assets/img/background/background.webp'
import BgIm4 from './assets/img/background/bg4.webp'
import Container from "react-bootstrap/Container";
import {Parallax} from "react-parallax";
import Skills from './pages/skills/skills.component.jsx'
import ProjectTimeline from './components/projects-timeline/projects-timeline.component';
// import Particles from 'react-particles-js'
import Contact from './pages/contact-form/contact-form.component.jsx'
// import {particleOptions} from './ParticleOptions';


import Footer from './components/Footer/footer.component.jsx'
const App =()=> {
  return (
    

    <div className="App" style={{ position: "relative" }}>
    
    <MyNavbar />
    {/* <Particles
        className="particles particles-box"
        params={particleOptions}
      />  */}
      <MyCarousal />
      <TitleMessage />
      
      <div>
      <Parallax bgImage={BgIm} strength={500}>
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      <hr />

        <div>
        <Parallax bgImage={BgIm4} strength={500}>
          <div>
          
            <Container className="container-box rounded">
              <Fade duration={500}>
                <Skills />
              </Fade>
            </Container>
     
          </div>
        
                
          </Parallax>
          <hr />
          <div>
          <Parallax bgImage={BgIm} strength={500}>
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <ProjectTimeline />
              </Fade>
            </Container>
          </div>
        </Parallax>
        </div>
        <hr />
          <div>
      <Parallax bgImage={BgIm4} strength={500}>
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <Contact />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      <div>
      <hr />
      <Parallax bgImage={BgIm} strength={500}>
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <Footer />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>

      </div>
      </div>
  );
}

export default App;
