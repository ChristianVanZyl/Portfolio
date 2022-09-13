import {Link as Link1} from 'react-scroll'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logoBrand from "../images/logoBrand.svg"
import { Link as Link2 } from "react-router-dom";

const Header = () => {

    return (
      <Navbar
        className="headerNavBarMainContainer "
        variant="custom"
        collapseOnSelect
        expand="lg"
        fixed="top"
      >
      <Navbar.Brand className="d-inline-block align-top">
      <Link2 to="/"><img  
              src={logoBrand}
              alt="mybrand_logo"
              className="headerImage"
            /></Link2>
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
             <Nav className="align-items-center">

             <Nav.Link className="active" ><Link1  className="headerLinks" activeClass="active" to="about" spy={true} smooth={true} duration={2}>
             <h4 className="headerText"><span className="numberColor">01.</span>&nbsp;&nbsp;About</h4></Link1></Nav.Link>
             <Nav.Link className="active" ><Link1  className="headerLinks" activeClass="active" to="experience" spy={true} smooth={true} duration={2}>
             <h4 className="headerText"><span className="numberColor">02.</span>&nbsp;&nbsp;Experience</h4></Link1></Nav.Link>
             <Nav.Link className="active" ><Link1  className="headerLinks" activeClass="active" to="portfolio" spy={true} smooth={true} duration={2}>
             <h4 className="headerText"><span className="numberColor">03.</span>&nbsp;&nbsp;Portfolio</h4></Link1></Nav.Link>
             <Nav.Link className="active"><Link1  className="headerLinks" activeClass="active" to="contact" spy={true} smooth={true} duration={2}>
             <h4 className="headerText"><span className="numberColor">04.</span>&nbsp;&nbsp;Contact</h4></Link1></Nav.Link>
             <Link2 className="headerLinks" to="/login">
             <Nav.Link className="active" >
             <h4 className="headerText">Resume</h4></Nav.Link>
             </Link2>
         </Nav>
        </Navbar.Collapse>
      </Navbar>

      )
    }


export default Header;
