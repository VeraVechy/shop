import React, { useState } from 'react';
import Cheese from '../assets/menu/cheese.png';
import Promo from './Promo';
import Vec from '../assets/vec.png';
import Like from '../assets/menu/Star.png';

function Shop() {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  }

  return (
    <>
      <div className="cover">
        <div className="text-center pt-5 text-light">
          <h2 className="pt-5" style={{ top: '' }}>CHEESE BURGER</h2>
          <p>Home <i className="fa fa-arrow-right ms-3 me-3" style={{ paddingBottom: '80px' }}></i> Cheese Burger</p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-6" style={{ justifyContent: 'center' }}>
          <img src={Cheese} className="rounded img-fluid mt-1 d-flex pt-5 ml-5 mb-5" alt="" style={{ width: '60%' }} />
        </div>
        <div className="col-md-6">
          <h2 className='' style={{ fontWeight: 'bold' }}>CHEESE BURGER</h2>
          <div className="img-rating">
            <img src={Like} alt="Ratings" style={{ paddingTop: '15px' }} />
          </div>
          <p className='' style={{ paddingTop: '15px' }}>$30.52 <span style={{ textDecoration: 'line-through', fontSize: '12px' }}>$70.52</span></p>

          <ul className='list-unstyled'>
            <li><a className="" href="">
              <img src={Vec} alt="" className="" style={{ marginRight: '15px' }} />
              In stock
                </a>
            </li>
            <li><a className="" href="">
              <img src={Vec} alt="" className="" style={{ marginRight: '15px' }} />
              Free delivery available
                </a>
            </li>
          </ul>

          <p>Savor the classic taste of our signature Cheese Burger. Juicy beef patty, topped with melted cheese, crisp lettuce, ripe tomatoes, and tangy pickles, all nestled between soft buns. Whether dining in or ordering online, our Cheese Burger promises a satisfying experience. Pair it with hand-cut fries or a refreshing beverage for a delicious meal that never goes out of style </p>
          <div className="d-flex align-items-center">
            <p className='mb-0' style={{ fontWeight: 'bold', marginInline:'20px' }}>Quantity:</p>
            <div className="input-group ml-3" style={{marginBlock:'20px'}}>
              <button className="btn rounded-circle btn-secondary text-dark" style={{background:' rgba(224, 221, 221, 1);', border:'none', maxHeight:'40px'}} onClick={decrementQuantity}>-</button>
              <input type="text" className="form-control text-center" style={{padding:'2px', maxWidth:'50px', height:'30px', border:'none', backgroundColor:'#FAF8F8'}} value={quantity} readOnly />
              <button className="btn rounded-circle btn-secondary text-dark" style={{background:' rgba(224, 221, 221, 1);', border:'none', maxHeight:'40px'}} onClick={incrementQuantity}>+</button>
            </div>
          </div>

          <a href="/cart" className="btn btn-success text-center" style={{ width: '50%', height: 'auto' }}>Add to Cart</a>

        </div>

<Promo></Promo>

        {/* <div className="b p-5 my-5 text-white">
          <div className="container  d-md-flex justify-content-between align-items-center">
            <div className="content-deal">
              <p className="text-light">🔥🎉 BLACK FRIDAY SPECIAL! SAVE 20% TODAY ONLY! 🔥🎉</p>
              <h2 className="text-light mb-4">A Sizzling Deal <span style={{ color: 'rgba(234, 158, 58, 1' }}> You Can't </span> Miss!</h2>
              <p className='text-light pt-3' style={{ marginBottom: '30px' }}>GRILLED CHIKEN $59,00</p>
              <a href='' className="btn btn-success pt-2">
                <img src={Order} alt="" className="img-fluid" style={{ marginBottom: '5px', marginInline: '5px' }} />
                Order Now</a>
            </div>
            <div className="d-flex ">
              <img src={Slice} alt="" className='image-fluid' />
            </div>
          </div>
        </div> */}
      </div>
    </>
  )
}

export default Shop;