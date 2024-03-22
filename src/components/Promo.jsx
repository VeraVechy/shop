import React from 'react'
import Order from '../assets/bag.png';
import Slice from '../assets/sli.png';

 function Promo() {
  return (
    <>
    <div className="b p-5 my-5 text-white">
        <div className="container  d-md-flex justify-content-between align-items-center">
            <div className="content-deal">
              <p>🔥🎉 BLACK FRIDAY SPECIAL! SAVE 20% TODAY ONLY! 🔥🎉</p>
              <h4>A Sizzling Deal <span style={{ color: 'rgba(234, 158, 58, 1' }}> You Can't </span> Miss!</h4>
              <p>GRILLED CHIKEN $10.00</p>
              <a href='' className="btn btn-success">
              <img src={Order} alt="" className="img-fluid" style={{marginBottom:'5px', marginInline:'5px', }} />
              Order Now</a>
            </div>
            <div>
              <img src={Slice} alt="" className='image-fluid'/>
            </div>
          </div>
        </div> 
    </>
  )
};

export default Promo
