import React from "react";
import "./LandingPage.css";

import Coffee from "./Coffee";
import Food from "./Food";
import Bakery from "./Bakery";
import AdVideo from "./pics/landingBack.mp4"
function LandingPage() {
  return (
  
      <div className="background" id="landingPage">
       
     <video id="video" autoPlay loop muted>
          <source src={AdVideo}   type="video/mp4"></source>
        </video>

        <Coffee />
        <Food />
        <Bakery/>
  
      </div>
  );
}

export default LandingPage;
