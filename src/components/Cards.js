import React from "react"
import pic1 from "../images/indizaCheckout.jpg"
import pic2 from "../images/indizaHome.jpg"
import pic3 from "../images/indizaLogin.jpg"
import pic4 from "../images/indizaProfile.jpg"
import ImageLoad from "./ImageLoad"

const Cards = () => {

    const img1 = {
        width: "100%",
        src: pic1,
        alt: "indizaCheckout"
      }

      const img2 = {
        width: "100%",
        src: pic2,
        alt: "indizaHome"
      }
      
      const img3 = {
        width: "100%",
        src: pic3,
        alt: "indizaLogin"
      }
      
      const img4 = {
        width: "100%",
        src: pic4,
        alt: "indizaProfile"
      } 

    return (
        <>
        <div className="cardContainer">
        <div className="card">
        <ImageLoad image={img1} />
        </div>
        <div className="cardBetween"></div>
        <div className="card">
        <ImageLoad image={img2} />
        </div>
        </div>
        <div className="gapBetweenCardVertical"></div>
        <div className="cardContainer">
        <div className="card">
        <ImageLoad image={img3} />
        </div>
        <div className="cardBetween"></div>
        <div className="card">
        <ImageLoad image={img4} />
        </div>
        </div>
        </>
    )

 
}

export default Cards