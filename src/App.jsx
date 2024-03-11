// import './App.css'
// import React from 'react';
import Cart from './components/Cart'; // Import the Cart component from the correct path
import Header from './components/Header'
import Home from './components/Home'
import Shop from './components/Shop'
import About from './components/About'
import Contact from './components/Contact'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  useEffect(() => {
    AOS.init({
      // Global settings for AOS (optional)
      duration: 3000,
      once: true, // Whether animation should happen only once while scrolling down
    });
  }, []); // Ensure this useEffect runs only once after component mount
  return (
    <>
    <Header/>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/shop" element={<Shop/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/cart" element={<Cart/>}/>
      </Routes>
    </Router>
    {/* <Footer/> */}
    </>
  )
}

export default App