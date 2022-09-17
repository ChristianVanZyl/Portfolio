import {Link as Link1} from 'react-scroll'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logoBrand from "../images/logoBrand.svg"
import { Link as Link2 } from "react-router-dom";
import Fade from 'react-reveal/Fade';


const Header = () => {

    function scrollToTop() {
      window.scrollTo(0, 0);
    }

    return (
      <Navbar
        className="headerNavBarMainContainer "
        variant="custom"
        collapseOnSelect
        expand="lg"
        fixed="top"
      >
      <Navbar.Brand as="div" className="d-inline-block align-top">
      <Fade>
      <button className="navImageButton" onClick={scrollToTop}><img  
              src={logoBrand}
              alt="mybrand_logo"
              className="headerImage"
            /></button></Fade>
      </Navbar.Brand>
          <Navbar.Toggle
          className="toggler"
          aria-controls="responsive-navbar-nav"
        >
        <i className="fa-solid fa-bars fa-lg" style={{color: "#fff"}}></i>
        </Navbar.Toggle>
        <Navbar.Collapse
        className="justify-content-end align-items-end"
          id="responsive-navbar-nav"
        >
             <Nav className="navMobile align-items-left">
             <Fade>
             <Nav.Link as="div" className="active" ><Link1  className="headerLinks" activeClass="active" to="about" spy={true} smooth={true} duration={2}>
             <h4 className="headerText"><span className="numberColor">01.</span>&nbsp;&nbsp;About</h4></Link1></Nav.Link>
             <Nav.Link as="div" className="active" ><Link1  className="headerLinks" activeClass="active" to="experience" spy={true} smooth={true} duration={2}>
             <h4 className="headerText"><span className="numberColor">02.</span>&nbsp;&nbsp;Experience</h4></Link1></Nav.Link>
             <Nav.Link as="div" className="active" ><Link1  className="headerLinks" activeClass="active" to="portfolio" spy={true} smooth={true} duration={2}>
             <h4 className="headerText"><span className="numberColor">03.</span>&nbsp;&nbsp;Portfolio</h4></Link1></Nav.Link>
             <Nav.Link as="div" className="active"><Link1  className="headerLinks" activeClass="active" to="contact" spy={true} smooth={true} duration={2}>
             <h4 className="headerText"><span className="numberColor">04.</span>&nbsp;&nbsp;Contact</h4></Link1></Nav.Link>
             
             <Nav.Link as="div" className="active" >
             <Link2 className="headerLinks" to="/login">
             <h4 className="headerText">Resume</h4></Link2></Nav.Link>
             </Fade>
         </Nav>
        </Navbar.Collapse>
      </Navbar>

      )
    }


export default Header;
