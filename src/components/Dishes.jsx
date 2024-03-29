import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import img1 from '../assets/pe.png';
import img2 from '../assets/Potato.png';
import img3 from '../assets/Cheese.png';
import img4 from '../assets/grill.png';
import Arr from '../assets/arr.png';

// Slick library
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function FoodItem() {
  const foodCategories = [
    {pic: img1, caption: 'Pepperoni Pizza'},
    {pic: img2, caption: 'Patato Chips'},
    {pic: img3, caption: 'Cheese Burger'},
    {pic: img4, caption: 'Grilled Chicken'}
  ]

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // breakpoint for desktop
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // breakpoint for tablet/mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  

  return (
    <>
      <div className="container mt-5">
        <div className=" d-flex justify-content-between mb-3">
          <div className="food-item-text">
            <p className='text-success'>CRISPY, EVERY BITE TASTE</p>
            <h4>POPULAR FOOD ITEMS</h4>
          </div>
          <div className="food-item-button">
            <img src={Arr} alt="" />
            {/* <button className="btn"><span className="material-symbols-outlined"></span></button>
            <button className="btn bg-success"><span className="material-symbols-outlined"></span></button> */}
          </div>
        </div>

        <div className="row">
          <Slider {...settings}>
            {foodCategories.map((foodCategory, index) => (
              <div className=" col-sm-6 col-lg-3 mt-4" key={index}>
                {/* Wrap each card with a Link component */}
                <Link to={`/shop`} className="card-link">
                  <div className="card highlight-item">
                    {/* <div className="food-img-wrapper"> */}
                      <img src={foodCategory.pic} className="card-img-top img-fluid" alt="..."/>
                    {/* </div> */}
                    <div className="mx-auto item-border"></div>
                    <div className="card-body">
                      <h3 className="card-text text-center">{foodCategory.caption}</h3>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
        <div>
          <a href="/shop" className='btn btn-success mx-auto text-center' style={{marginTop:'20px', alignContent:'center'}}>Learn more</a>
        </div>
      </div>
    </>
  )
}

export default FoodItem;
