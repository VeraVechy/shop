import React from 'react';
import Logo from "../assets/logo.png";
import App from '../assets/Appstore.png';
import Play from '../assets/Googleplay.png';

function Footer() {
  return (
    <div className="container">
      <div className="container-fluid row">
      <div className="footer col-lg-3 col-md-6">
          <div className="" style={{paddingBottom:'10px'}}>
              <img src={Logo} alt="Logo" className='img-fluid' style={{width:'3rem'}}/>
              <p>We believe it has the power to do amazing things.</p>
              <p>Interested in working with us?</p>
                    <p><a href="mailto:info@example.com"><b>info@tastehaven.com</b></a></p>
            </div>
          </div>
          <div className="footer col-lg-3 col-md-6">
                <h5>Quick Links</h5>
                <ul>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Latest Food</a></li>
                    <li><a href="#">My Account</a></li>
                </ul>
            </div>
            <div className="footer col-lg-3 col-md-6">
                <h5>Address</h5>
                <p>570 8th Ave, New York, NY 10018 United States</p>
                <h5>Hours:</h5>
                <p>9.30am - 6.30pm</p>
                <p>Monday To Friday</p>
            </div>
            <div className="footer col-lg-3 col-md-6">
                <h5>Install App</h5>
                <p>FROM APP STORE OR GOOGLE PLAY</p>
                <div className="download d-flex align-items-center">
                    <div className="apple">
                        <a href="#"><img src={App} alt="Apple store" className='img-fluid' /></a>
                    </div>
                    <div className="playstore">
                        <a href="#"><img src={Play} alt="Google play" className='img-fluid' /></a>
                    </div>
                </div>
            </div>
            </div>

          <div className="mt-5 text-center">
        <p> &copy; Copyright {new Date().getFullYear()} All Rights Reserved.</p>
      </div>
        </div>
        
      

  
  );
}

export default Footer;
