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
        
        <Button aria-label="linkedInlink" className="socialLinkButtons mb-1" onClick={() => window.open("https://www.linkedin.com/in/christian-van-zyl-5629b0250", '_blank')}><p className="socialLinks">{
          isMobile ? <i className="fa-brands fa-linkedin-in fa-sm"></i> : <i className="fa-brands fa-linkedin-in fa-lg"></i>}</p>
        </Button>
       
        <Button aria-label="instagramlink" className="socialLinkButtons mb-1" onClick={() => window.open("https://www.instagram.com/christianvanzyl", '_blank')}><p className="socialLinks">
        {
          isMobile ? <i className="fa-brands fa-instagram fa-sm"></i> : <i className="fa-brands fa-instagram fa-lg"></i>
        }
        </p></Button>
       
        <Button aria-label="githublink" className="socialLinkButtons mb-1" onClick={() => window.open("https://github.com/ChristianVanZyl", '_blank')}><p className="socialLinks">
        {isMobile ? <i className="fa-brands fa-github fa-sm"></i> : <i className="fa-brands fa-github fa-lg"></i>}
        </p></Button>
        </ButtonGroup>
        </Fade>
        <div className="LeftLinksBarLine"></div>
        </Navbar.Brand>
        
        </Navbar>
    )
}

export default LeftLinksBar