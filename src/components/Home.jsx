import React, { useState } from 'react';
import ArrowLeft from '../assets/ArrowLeft.png';
import ArrowRight from '../assets/ArrowRight.png';
import BackgroundImage1 from '../assets/bg1.png';
import BackgroundImage2 from '../assets/bg2.png';
import Dishes from '../components/Dishes'
import Arr from '../assets/arr.png';
import Slice from '../assets/sli.png';
import I1 from '../assets/icon1.png';
import I2 from '../assets/icon2.png';
import I3 from '../assets/icon3.png';
import I4 from '../assets/icon4.png';
import I5 from '../assets/icon5.png';
import I6 from '../assets/icon6.png';
import Order from '../assets/bag.png';
import BC from '../assets/bc.png';
import Rev from '../assets/rev.png';
import { FaSquare } from 'react-icons/fa';
import Menu from '../components/Menu'



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
            <a href="" className="btn btn text-success" style={{ marginRight: '20px', marginBottom: '40px' }}>SHOP NOW</a>
            <a href="" className="btn btn-success" style={{ marginBottom: '40px' }}>LEARN MORE</a>
          </div>
        </div>
      </div>
      {/* Menu section */}
      
<Dishes></Dishes>

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


      {/* Promo section */}
      <div className="b p-5 my-5 text-white">
        <div className="container  d-md-flex justify-content-between align-items-center">
            <div className="content-deal">     
              <p className="text-light">🔥🎉 BLACK FRIDAY SPECIAL! SAVE 20% TODAY ONLY! 🔥🎉</p>
              <h2 className="text-light mb-4">A Sizzling Deal <span style={{ color: 'rgba(234, 158, 58, 1' }}> You Can't </span> Miss!</h2>
              <p className='text-light pt-3' style={{marginBottom:'30px'}}>GRILLED CHIKEN $59,00</p>
              <a href='' className="btn btn-success pt-2">
              <img src={Order} alt="" className="img-fluid" style={{marginBottom:'5px', marginInline:'5px'}} />
              Order Now</a>
            </div>
            <div className="d-flex ">
              <img src={Slice} alt="" className='image-fluid'/>
            </div>
          </div>
        </div>


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
