import React, { useState } from 'react';
import ArrowLeft from '../assets/ArrowLeft.png';
import ArrowRight from '../assets/ArrowRight.png';
import BackgroundImage1 from '../assets/bg1.png';
import BackgroundImage2 from '../assets/bg2.png';
// import Rec from '../assets/rec.png'; 
import Pep from '../assets/pe.png';
import Po from '../assets/Potato.png';
import Ch from '../assets/Cheese.png';
import Gr from '../assets/grill.jpg';
import Arr from '../assets/arr.png';
import Slice from '../assets/sli.png';
import I1 from '../assets/icon1.png';
import I2 from '../assets/icon2.png';
import I3 from '../assets/icon3.png';
import I4 from '../assets/icon4.png';
import I5 from '../assets/icon5.png';
import I6 from '../assets/icon6.png';
import Order from '../assets/bag.png';
import { FaSquare } from 'react-icons/fa';



function Home() {
  const [backgroundImage, setBackgroundImage] = useState(BackgroundImage1);
  const [messages, setMessages] = useState([
    {
      h1: "Taste the Difference:",
      h1Colored: "Welcome to TASTE HAVEN",
      lead: "Delight your senses with our flavorful dishes, warm atmosphere, and impeccable service. Join us for a memorable dining adventure today."
    },
    {
      h1: "EVERY BITE",
      h1Colored: "TELLS A STORY",
      lead: "Delve into a culinary journey where every bite narrates its own unique tale. Experience our diverse menu and let your taste buds embark on an unforgettable adventure."
    }
  ]);

  const handleArrowClick = () => {
    setBackgroundImage(prevImage => 
      prevImage === BackgroundImage1 ? BackgroundImage2 : BackgroundImage1
    );
  };


  
  return (
    <>
      <div className="bg" style={{ backgroundImage: `url(${backgroundImage})`, backgroundRepeat: 'no-repeat' }}>
        <div className="toggled-indicator text-center text-muted">
          {backgroundImage === BackgroundImage1 ? <FaSquare /> : <FaSquare />}
        </div>

        {/* hero */}
        <div className="container text-light">
          <div className="pt-5 mr-3 text-center">
            <h1 className="display-4" style={{ marginTop: '50px', fontWeight: 'bold' }}>
              <span style={{ color: 'rgba(255, 255, 255, 1)' }}>{messages[backgroundImage === BackgroundImage1 ? 0 : 1].h1}</span>{" "}
             <span style={{ color: 'rgba(234, 158, 58, 1)' }}>{messages[backgroundImage === BackgroundImage1 ? 0 : 1].h1Colored}</span>
            </h1>
            <div className="d-md-flex justify-content-center align-items-center mb-4">
              <img src={ArrowLeft} alt="Left Arrow" className="me-md-3 mb-3 mb-md-0" style={{ width: '120px' }} onClick={handleArrowClick} />
              <p className="lead" style={{ fontWeight: '500' }}>{backgroundImage === BackgroundImage1 ? messages[0].lead : messages[1].lead}</p>
              <img src={ArrowRight} alt="Right Arrow" className="ms-md-3" style={{ width: '120px' }} onClick={handleArrowClick} />
            </div>
            <a href="" className="btn btn text-success" style={{ marginRight: '20px', marginBottom: '20px' }}>SHOP NOW</a>
            <a href="" className="btn btn-success" style={{ marginBottom: '20px' }}>LEARN MORE</a>
          </div>
        </div>
      </div>
      {/* Menu section */}
      <div className="container mt-5">
        <div className='menu'>
          <div className='d-flex justify-content-between align-items-center'>
            <div>
              <p className='text-success'>CRISPY, EVERY BITE TASTE</p>
              <h2>POPULAR FOOD ITEMS</h2>
            </div>
            <img src={Arr} alt="" style={{padding:'20px'}}/>
          </div>

          <div className='row'>
            <div className="col-md-3">
              <div className="card mb-4">
                <img src={Pep} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h2 className="card-text text-center">Pepperoni <br />Pizza </h2>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card mb-4">
                <img src={Po} className="card-img-top" style={{backgroundColor:'rgba(234, 158, 58, 1)'}} alt="..."/>
                <div className="card-body" style={{backgroundColor:'rgba(234, 158, 58, 1)'}}>
                  <h2 className="card-text text-center text-light">Potato <br />Chips </h2>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card mb-4">
                <img src={Ch} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h2 className="card-text text-center">Cheese <br />Burger </h2>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card mb-4">
                <img src={Gr} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h2 className="card-text pt-1 text-center">Grilled <br />Chicken </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sponsors section */}
      <div className="container">
        <p className='text-success pt-5'>HAPPY SPONSORS WITH US</p>
        <div className="row pt-3 py-4 d-flex justify-content-center">
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


      {/* Sponsors section */}
      <div className="b mt-5 mb-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6 justify-content-center align-items-center flex-wrap">
              <p className="text-light">🔥🎉 BLACK FRIDAY SPECIAL! SAVE 20% TODAY ONLY! 🔥🎉</p>
              <h2 className="text-light mb-4">A Sizzling Deal <span style={{ color: 'rgba(234, 158, 58, 1' }}> You Can't </span> Miss!</h2>
              <p className='text-light pt-3' style={{marginBottom:'30px'}}>GRILLED CHIKEN $59,00</p>
              <a href='' className="btn btn-success pt-2">
              <img src={Order} alt="" className="img-fluid d-inline" style={{marginBottom:'5px', marginInline:'5px'}} />
              Order Now</a>
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <img src={Slice} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Menu section */}
      <div className="container mt-5 pt-3">
        <div className='menu pb-3 text-center'>
          <div className='justify-content-between align-items-center mb-5'>
            <div>
              <p className='text-success'>CRISPY, EVERY BITE TASTE</p>
              <h2>POPULAR FOOD ITEMS</h2>
            </div>
          </div>

          <div className='row'>
            <div className="col-md-3">
              <div className="card mb-4">
                <img src={Pep} className="card-img-top" alt="..."/>
                <div className="card-body" style={{backgroundColor:'rgba(244, 235, 235, 0.791)'}}>
                  <h2 className="card-text text-center">Pepperoni <br />Pizza </h2>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card mb-4">
                <img src={Po} className="card-img-top" style={{backgroundColor:'rgba(234, 158, 58, 1)'}} alt="..."/>
                <div className="card-body" style={{backgroundColor:'rgba(244, 235, 235, 0.791)'}}>
                  <h2 className="card-text text-center">Potato <br />Chips </h2>
                </div>
              </div>
            </div>

            <div className="col-md-3">
            <div className="card mb-4">
                <img src={Pep} className="card-img-top" alt="..."/>
                <div className="card-body" style={{backgroundColor:'rgba(244, 235, 235, 0.791)'}}>
                  <h2 className="card-text text-center">Pepperoni <br />Pizza </h2>
                </div>
              </div>
            </div>

            <div className="col-md-3">
            <div className="card mb-4">
                <img src={Pep} className="card-img-top" alt="..."/>
                <div className="card-body" style={{backgroundColor:'rgba(244, 235, 235, 0.791)'}}>
                  <h2 className="card-text text-center">Pepperoni <br />Pizza </h2>
                </div>
              </div>
            </div>
            </div>
            <div className='row'>
            <div className="col-md-3">
              <div className="card mb-4">
                <img src={Pep} className="card-img-top" alt="..."/>
                <div className="card-body" style={{backgroundColor:'rgba(244, 235, 235, 0.791)'}}>
                  <h2 className="card-text text-center">Pepperoni <br />Pizza </h2>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card mb-4">
                <img src={Po} className="card-img-top" style={{backgroundColor:'rgba(234, 158, 58, 1)'}} alt="..."/>
                <div className="card-body" style={{backgroundColor:'rgba(244, 235, 235, 0.791)'}}>
                  <h2 className="card-text text-center">Potato <br />Chips </h2>
                </div>
              </div>
            </div>

            <div className="col-md-3">
            <div className="card mb-4">
                <img src={Pep} className="card-img-top" alt="..."/>
                <div className="card-body" style={{backgroundColor:'rgba(244, 235, 235, 0.791)'}}>
                  <h2 className="card-text text-center">Pepperoni <br />Pizza </h2>
                </div>
              </div>
            </div>

            <div className="col-md-3">
            <div className="card mb-4">
                <img src={Pep} className="card-img-top" alt="..."/>
                <div className="card-body" style={{backgroundColor:'rgba(244, 235, 235, 0.791)'}}>
                  <h2 className="card-text text-center">Pepperoni <br />Pizza </h2>
                </div>
              </div>
            </div>
            </div>

            </div>
            </div>
          
    </>
  );
}

export default Home;
