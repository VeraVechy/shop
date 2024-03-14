import React from 'react';
import Cart from '../assets/Cart.png';
import Call from '../assets/call.png';
import Fa from '../assets/Fb.png';
import In from '../assets/Insta.png';
import Logo from "../assets/logo.png";
import { FaSearch } from 'react-icons/fa';

function Header() {
  return (
    <>
      <div className="secondary-navbar" style={{backgroundColor:'white'}}>
        <div className="container d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <span className='text-success' style={{marginRight:'4px'}}>100% </span>
            <span>Secure delivery</span>
          </div>
          <div className="vertical-line"></div>
          <div className="search-bar d-flex align-items-center">
            <FaSearch className="search-icon me-1"/>
            <input type="text" placeholder="Search" className="form-control"/>
          </div>
          <div className="contact-details">
            <img src={Call} alt="Call" className="call-image mr-2" />08167000077
            <span className="contact-separator"></span>
            <img src={Fa} alt="Fb" className="fb-image mr-2" />Taste_Haven
            <span className="contact-separator"></span>
            <img src={In} alt="Insta" className="Insta-image mr-2" />Taste_Haven
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg" style={{backgroundColor:'white'}}>
        <div className="container">
          <a className="navbar-brand" href="/"><img src={Logo} alt="" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link active text-success" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" style={{fontWeight:'bold'}} href="/shop">Product Details</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href='/about'>About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href='/contact'>Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/cart">
                  <img src={Cart} alt="Cart" className="cart-image mr-2" />
                  Cart
                </a>
              </li>
            </ul>
            <a href="/contact" className="btn btn" style={{ marginRight: '20px' }}>Register</a>
            <a href="/contact" className="btn btn-success">Login</a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header;
