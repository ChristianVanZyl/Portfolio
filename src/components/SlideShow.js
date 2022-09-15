import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slide1 from "../images/playHomeScreen.jpg"
import slide2 from "../images/playRegisterScreen.jpg"
import slide3 from "../images/playBrowseScreen.jpg"
import slide4 from "../images/playCheckoutScreen.jpg"
import slide5 from "../images/playBackendScreen2.jpg"
import slide6 from "../images/playBackendScreen.jpg"

const SlideShow = () => {
 
  return (

   
      <Carousel autoPlay interval="5000" transitionTime="5000" infiniteLoop>
                <div>
                    <img src= {slide1} alt = "playHomeScreen" />
                   
                </div>
                <div>
                <img src= {slide2}  alt ="playRegisterScreen" />
               
                </div>
                <div>
                <img src= {slide3} alt ="playBrowseScreen" />
                  
                </div>
                <div>
                <img src= {slide4} alt ="playCheckoutScreen" />
                
                </div>
                <div>
                <img src= {slide5} alt ="playBackendScreen2" />
                  
                </div>
                <div>
                <img src= {slide6} alt = "playHomeScreen" />
               
                </div>
            </Carousel>

  );
}







export default SlideShow;