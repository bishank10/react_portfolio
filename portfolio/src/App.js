import React from 'react';
import './index.css'
import image from "./bishank.jpg"
import Navbar from "./components/Navbar"
import Home from "./components/Home"





function App() {
  return (
    <>
<Navbar />
<Home />


<div className="container-fluid bg-3 text-center">    
  <h3 className="margin">Where To Find Me?</h3><br />
  <div className="row">
    <div className="col-sm-4">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <img src={image} className="img-responsive margin"  alt="Image" />
    </div>
    <div className="col-sm-4"> 
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <img src={image} className="img-responsive margin" alt="Image" />
    </div>
    <div className="col-sm-4"> 
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <img src={image} className="img-responsive margin"  alt="Image" />
    </div>
  </div>
</div>



<footer className="container-fluid bg-4 text-center">
  <p>Bootstrap Theme Made By <a href="https://www.w3schools.com">www.w3schools.com</a></p> 
</footer>
</>

  );
}

export default App;
