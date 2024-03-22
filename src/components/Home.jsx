import React, { useState } from 'react';
import Dishes from '../components/Dishes'
import headerBg from "../assets/headerBg.png";
import I1 from '../assets/icon1.png';
import I2 from '../assets/icon2.png';
import I3 from '../assets/icon3.png';
import I4 from '../assets/icon4.png';
import I5 from '../assets/icon5.png';
import I6 from '../assets/icon6.png';
import BC from '../assets/bc.png';
import Rev from '../assets/rev.png';
import Menu from '../components/Menu';
import Promo from './Promo'



function Home() {
  
  return (
    <>
          <div id="carouselExampleCaptions" className="carousel slide caro-font">
        <div className="carousel-indicators arrow-indicator">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active caro-img">
                <img src={headerBg} className="d-block w-100" alt="..."/>
                <div className="carousel-caption  d-md-block pb-md-5 mb-lg-5">
                    <h2>Taste the Difference: <span style={{color: '#EA9E3A'}}>Welcome to <br />TASTE HEAVEN</span></h2>
                    <p>
                        Delight your senses with our flavorful dishes, warm atmosphere, and impeccable service. Join us for a memorable dining adventure today.
                    </p>
                    <button className="btn border border-success bg-black text-success me-2">Shop Now</button>
                    <button className="btn bg-success text-white">Learn More</button>
                </div>
            </div>
            <div className="carousel-item  caro-img">
                <img src={headerBg} className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-md-block pb-md-5 mb-lg-5">
                    <h2>EVERY BITE <span style={{color: '#EA9E3A'}}>TELLS A STORY</span></h2>
                    <p>
                        From mouthwatering dishes to cozy ambiance, experience the perfect blend of flavors and hospitality. Join us for an unforgettable dining journey.
                    </p>
                    <button className="btn border border-success bg-black text-success me-2">Shop Now</button>
                    <button className="btn bg-success text-white">Learn More</button>
                </div>
            </div>
        </div>
        <button className="carousel-control-prev my-auto ms-md-2" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next my-auto me-md-2" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>

      {/* Menu section */}
      
<Dishes></Dishes>

      {/* Sponsors section */}
      <div className="container">
        <p className='text-success pt-5 text-bold'>HAPPY SPONSORS WITH US</p>
        <div className="row pt-3 py-5 d-flex justify-content-center">
          <div className="col-2">
            <img src={I1} alt="" className="img-fluid" />
          </div>
          <div className="col-2">
            <img src={I2} alt="" className="img-fluid" />
          </div>
          <div className="col-2">
            <img src={I3} alt="" className="img-fluid" />
          </div>
          <div className="col-2">
            <img src={I4} alt="" className="img-fluid" />
          </div>
          <div className="col-2">
            <img src={I5} alt="" className="img-fluid" />
          </div>
          <div className="col-2">
            <img src={I6} alt="" className="img-fluid" />
          </div>
        </div>
      </div>

<Promo></Promo>

<Menu></Menu>

      <div className="row mt-5" style={{backgroundColor:'white'}}>
        <div className="col-md-6" >
          <img src={BC} className="rounded img-fluid mt-4 mb-4" alt="about" />
        </div>
        <div className="coke-fries-text align-self-center text-center col-md-6 mt-sm-3">
        <p className='text-success'>CRISPY, EVERY BITE TASTE</p>
        <h4 className=''>TASTE HAVEN CHIKEN HOTWING & FRENCH FRIES</h4>
        <a href="/service" className="btn btn-success">Order</a>
        </div>
      </div>

      {/* Review */}
    <div className="container text-center my-5">
        <div className="text">
            <p className='text-success'>What our clients say about us</p>
            <p><b>TESTIMONIAL</b></p>
        </div>
        <div className="person">
            <p>
                “THANK YOU FOR DINNER LAST NIGHT. IT WAS AMAZING!! I HAVE SAY IT’S THE BEST MEAL I HAVE HAD INQUITE SOME TIME. WILL DEFINITELY BE SEEING MORE EATING REGULARLY.”
            </p>
            <div className="img-monial-wrapper">
                <img src={Rev} alt="profile testimonial" className='img-fluid'/>
            </div>
            <div className="profiel text">
                <p style={{color: '#EA9E3A'}}>Peter Bowma</p>
                <p><b>Avatech CEO & Co Founder</b></p>
            </div>
        </div>
    </div>
          
    </>
  );
}

export default Home;
