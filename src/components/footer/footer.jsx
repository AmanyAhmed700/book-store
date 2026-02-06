import React from "react";
import "./footer.css";
import './Social'
import Social from "./Social";
const Footer = () => {
  return (
    <footer className="footer">
          <Social/>
      <div className="links">
        <div className="linkes-items">
          <h3 className="h3">Contact Information</h3>
          <div className="items">
            <div className="address">
              <i className="bi bi-geo-alt-fill"></i>
              Egypt-Luxor
            </div>
            <div className="address">
              <i className="bi bi-telephone-fill"></i>
              123-456-789
            </div>

            <div className="address">
              <i className="bi bi-envelope-fill"></i>
              Book@gmail.com
            </div>
          </div>
        </div>

        <div className="des">
          <h3>Terms and settings</h3>
          <p className="desfoot">
           Privacy & cookies
          </p>
           <p className="desfoot">
              Terms and conditions
          </p>
    
           <p className="desfoot">
          Human Rights Statement
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
