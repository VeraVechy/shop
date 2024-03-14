import React from 'react';
import Logo from "../assets/logo.png";
import App from '../assets/Appstore.png';
import Play from '../assets/Googleplay.png';

function Footer() {
  return (
    <div className="py-2">
      <div className="container-footer pt-5 pb-5">
        <div className="row pt-5">
          <div className="col-md-3">
          <div className="" style={{paddingBottom:'10px'}}>
              <img src={Logo} alt="Logo"style={{width:'20%', height:'auto'}}/>
              <p>We believe it has the power to do amazing things.</p>
              <p>Interested in working with us?</p>
              <p className='' style={{ fontWeight: '600' }}>info@tastehaven.com</p>
            </div>
          </div>
          <div className="col-md-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className='text-dark text-decoration-none'>Services</a></li>
              <li><a href="#" className='text-dark text-decoration-none'>About Us</a></li>
              <li><a href="#" className='text-dark text-decoration-none'>Latest Meals</a></li>
              <li><a href="#" className='text-dark text-decoration-none'>My Account</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Address</h5>
            <p>570 8th Ave, New York, NY 10018 United States </p>
            <h5>Hours:</h5>
            <p>9:30am-6:30pm</p>
            <p>Mondays to Fridays</p>
          </div>
          <div className="col-md-3">
            <h5>Install App</h5>
            <p>FROM APP STORE OR GOOGLE PLAY</p>
            <div className="d-flex">
              <img src={App} className='mr-2' alt="" style={{ width: '100px', height: '30px', marginTop:'2px' }} />
              <img src={Play} alt="" style={{ width: '100px',marginBottom:'9px'}} />
            </div>
          </div>
      </div>

          <div className="mt-5 text-center">
        <p> &copy; Copyright {new Date().getFullYear()} All Rights Reserved.</p>
      </div>
        </div>
        
      

    </div>
  );
}

export default Footer;
