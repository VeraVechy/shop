import React from 'react';
import Cart from '../assets/Cart.png';
import Call from '../assets/call.png';
import Fa from '../assets/Fb.png';
import In from '../assets/Insta.png';
import Logo from "../assets/logo.png";
import Search from '../assets/search.png';

function Header() {
  return (
    <div className="container-fluid">
      <div className="headline-info row">
        <div className="col-md-4 adding-border pt-3">
          <p><span className='text-success'>100%</span> Secure delivery </p>
        </div>
        <div className="col-md-4 search adding-border1 pt-3">
          <input type="search" placeholder='Search'/>
          <img src={Search} alt="search image" />
        </div>
        <div className="col-md-4 d-flex adding-border1 pt-3">
          <div className="headline-images">
            <div className="img-headline">
              <img src={Call} alt="Call Number 08167000077" />
            </div>
            <p>08167000077</p>
          </div>
          <div className="headline-images">
            <div className="img-headline">
              <img src={Fa} alt="Facebook" />
            </div>
            <p>Taste_heaven</p>
          </div>
          <div className="headline-images">
            <div className="img-headline">
              <img src={In} alt="Instagram" />
            </div>
            <p>Taste_heaven</p>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="/"><img src={Logo} alt="Taste Heaven Logo" style={{ width: '3rem' }}/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav mx-auto">
              <a className="nav-link active text-success" aria-current="page" href="/">Home</a>
              <a className="nav-link" href="/shop">Shop</a>
              <a className="nav-link" href="/about">About</a>
              <a className="nav-link" href="/contact">Contact</a>
              <a className="nav-link" href="/cart">
                <img src={Cart} alt="Cart" className="cart-image mr-2" />Cart
              </a>
            </div>
            <button className="btn border border-success bg-white text-success me-2">Register</button>
            <button className="btn bg-success text-white">Login</button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
