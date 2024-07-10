import React from 'react'
import './Hero.css'
 const Hero = () => {
  return (
    <div>
        <div className="hero"> 
        <div className="hero-left">
          <h2>NEW ARRIVALS ONLY </h2> 
         <div>
            <div className="hero-hand-icon">
                <p>new</p>
                <img src="https://icons.iconarchive.com/icons/microsoft/fluentui-emoji-3d/256/Waving-Hand-3d-Default-icon.png" alt=" "></img>
            </div>
            <p>collections</p>
            <p>for everyone </p>
         </div>
         <div className="hero-latest-button">
            <div>Latest Collection</div>
            <img src="https://i.pinimg.com/originals/52/0a/d9/520ad9c57901ea2a4f1448b9d18444ec.png" alt=" "></img>
         </div>
            </div>
            <div className="hero-right">
                <img src="https://cdn.shopify.com/s/files/1/0266/6276/4597/files/western_wear_for_men__-women.jpg?v=1665034875" alt=" "></img>
            </div>
            </div>
    </div>
  )
}
export default Hero