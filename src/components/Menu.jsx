import React from 'react';
import img1 from '../assets/menu/pe.png';
import img2 from '../assets/menu/beef.png';
import img3 from '../assets/menu/Chicken.png';
import img4 from '../assets/menu/pot2.png';
import img5 from '../assets/menu/cheese.png';
import img6 from '../assets/menu/shaw.png';
import img7 from '../assets/menu/Pasta.png';
import img8 from '../assets/menu/Potato.png';

import love from '../assets/menu/like.png';
import fullStar from '../assets/menu/Star.png';
import star from '../assets/menu/Star.png';

function FoodCollections() {

    const foodCategories = [
        {pic: img1, caption: 'Pepperoni Pizza'},
        {pic: img2, caption: 'Beef Shawarma'},
        {pic: img3, caption: 'Fried Chicken'},
        {pic: img4, caption: 'French Fries'}
    ];
    const foodCategories2 = [
        {pic: img5, caption: 'Cheese Burger'},
        {pic: img6, caption: 'Beef Shawarma'},
        {pic: img7, caption: 'Vegetable Pasta'},
        {pic: img8, caption: 'Potato Chips'}
    ];

    const rateFood = {
        heart: love,
        fullRate: fullStar,
        noRate: star
    };

    return (
        <>
            <div className="container-fluid">
                <div className="container">
                    <div className="text-center mb-4">
                        <p className="text-success">CRISPY, EVERY BITE TASTE</p>
                        <h4>POPULAR FOOD ITEMS</h4>
                    </div>

                    <div className="row">
                        {foodCategories.map((foodCategory, index) => (
                            <div className="food-items col-lg-3 col-md-6 col-sm-6" key={index}>
                                <div className="Fastfood-btn">
                                    <div className="fastFoods">
                                        <div className="foods mx-auto">
                                            <img src={foodCategory.pic} alt="Food items" className='img-fluid'/>
                                        </div>
                                        <div className="love">
                                            <img src={rateFood.heart} alt="Love" className='img-fluid'/>
                                        </div>
                                    </div>
                                    <button style={{width: '10rem'}} className='btn btn-secondary mx-auto display-btn'>Add To Chart</button>
                                </div>

                                <div className="text pt-3">
                                    <span>{foodCategory.caption}</span>

                                    <div className="img-rating">
                                        <img src={rateFood.noRate} alt="Ratings" className='img-fluid'/>
                                    </div>
                                    <p>$30.52 <span style={{textDecoration: 'line-through', fontSize: '12px'}}>$70.52</span></p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="row my-2">
                        {foodCategories2.map((foodCategory, index) => (
                            <div className="food-items col-lg-3 col-md-6 col-sm-6" key={index}>
                                <div className="Fastfood-btn">
                                    <div className="fastFoods">
                                        <img src={foodCategory.pic} alt="" className='img-fluid'/>
                                        <div className="love">
                                            <img src={rateFood.heart} alt=""/>
                                        </div>
                                    </div>
                                    <button style={{width: '10rem'}} className='btn btn-secondary mx-auto display-btn'>Add To Chart</button>
                                </div>
                                <div className="text pt-3">
                                    <span>{foodCategory.caption}</span>

                                    <div className="img-rating">
                                        <img src={rateFood.fullRate} alt="Ratings"/>
                                    </div>
                                    <p>$30.52 <span style={{textDecoration: 'line-through', fontSize: '12px'}}>$70.52</span></p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default FoodCollections;
