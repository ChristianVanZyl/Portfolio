import Navbar from 'react-bootstrap/Navbar';
import {ButtonGroup, Button} from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import {isMobile} from 'react-device-detect';

const LeftLinksBar = () => {

    return (
        <Navbar
          className="LeftLinksBar"
          variant="custom"
          fixed="bottom"
        >
        <Navbar.Brand as="div">
        <Fade>
        <ButtonGroup vertical>
        
        <Button className="socialLinkButtons mt-1"><a href="https://www.linkedin.com/in/christian-van-zyl-5629b0250" className="socialLinks">{
          isMobile ? <i className="fa-brands fa-linkedin-in fa-md"></i> : <i className="fa-brands fa-linkedin-in fa-lg"></i>}
        </a></Button>
       
        <Button className="socialLinkButtons mt-1"><a href="https://www.instagram.com/christianvanzyl" className="socialLinks">{
          isMobile ? <i className="fa-brands fa-instagram fa-md"></i> : <i className="fa-brands fa-instagram fa-lg"></i>
        }
        </a></Button>
       
        <Button className="socialLinkButtons mt-1"><a href="https://github.com/ChristianVanZyl" className="socialLinks">
        {isMobile ? <i className="fa-brands fa-github fa-md"></i> : <i className="fa-brands fa-github fa-lg"></i>}
        </a></Button>
        </ButtonGroup>
        </Fade>
        <div className="LeftLinksBarLine"></div>
        </Navbar.Brand>
        
        </Navbar>
    )
}

export default LeftLinksBar