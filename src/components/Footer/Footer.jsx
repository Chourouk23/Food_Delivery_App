import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img src={assets.logo} alt="" />
          <p> r,gtkl,kryh,ykth,fnzjefrhfbhregbrg rbhrfs fshfbshv vbugyrge
            gebghe rgyrehge gbegheugheu gherugh reugher gerugerug herugheruig
            regegerug nfjez dnddedne nfjnfefn nfjefhef bfhf foe fbhf ufufue
          </p>
          <div className="footer-socialmeadia">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-center">
            <h2>COMPANY</h2>
            
                <li>Home</li>
                <li>About us</li>
                <li>dilevery</li>
                <li>Privacy policy</li>
            
        </div>
        <div className="footer-right">
            <h2>GET IN TOUCH</h2>
            
                <li>+1-212-456-7890</li>
                <li>contact@tomato.com</li>
            
        </div>
      </div>
      <hr/>
      <p>copyright 2024 c Tomato.com -All Right Resrved</p>
    </div>
  );
};

export default Footer;
