import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../images/playHomeScreen.webp"
import slide2 from "../images/playRegisterScreen.webp"
import slide3 from "../images/playBrowseScreen.webp"
import slide4 from "../images/playLoginScreen.webp"
import slide5 from "../images/playBackendScreen2.webp"
import slide6 from "../images/playBackendScreen.webp"

const SliderComp = () => {

 const settings = {
        autoplay: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: 'progressive'
      }
  
return (
    <div className="slider-wrapper">
    <Slider {...settings}>
     <div className="slick-slide">
                    <img className="slick-slide-image" width="588px" height="288px" src= {slide1} alt = "playHomeScreen" />
                   
                </div>
                <div className="slick-slide">
                <img className="slick-slide-image" width="588px" height="288px" src= {slide2}  alt ="playRegisterScreen" />
               
                </div>
                <div className="slick-slide">
                <img className="slick-slide-image" width="588px" height="288px" src= {slide3} alt ="playBrowseScreen" />
                  
                </div>
                <div className="slick-slide">
                <img className="slick-slide-image" width="588px" height="288px" src= {slide4} alt ="playLoginScreen" />
                
                </div>
                <div className="slick-slide">
                <img className="slick-slide-image" width="588px" height="288px" src= {slide5} alt ="playBackendScreen2" />
                  
                </div>
                <div className="slick-slide">
                <img className="slick-slide-image" width="588px" height="288px" src= {slide6} alt = "playHomeScreen" />
               
                </div>
            </Slider> </div>)

}

export default SliderComp





