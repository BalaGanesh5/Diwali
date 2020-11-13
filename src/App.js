import React from 'react';
import './App.css';

function App() {
  window.onload = function() {
    lax.setup() // init
  
    const updateLax = () => {
      lax.update(window.scrollY)
      window.requestAnimationFrame(updateLax)
    }
  
    window.requestAnimationFrame(updateLax)
  }
  
  return (
    <div className="App">
       <div className="container">
      <h1 className="lax" data-lax-translate-y='-0 -10, 2000 2000'
      ><span>Happy</span> Diwali . . .</h1>
      <img src="https://i.ibb.co/N7chxJy/First.png" className="first lax" data-lax-translate-y='0 -20, 900 -300'/>
      <img src="https://i.ibb.co/xY5HcsF/second.png" className="boy lax" data-lax-translate-y='0 -10, 2500 -100'/>
      <img src="https://i.ibb.co/kH8tvVy/Third.png" className="third lax" data-lax-translate-y='0 -10, 500 -200'/>
      <img src="https://i.ibb.co/822MjgT/Fourth.png" className="fourth lax" data-lax-translate-y='0 -10, 300 -100'/>
      <img src="https://i.ibb.co/wySnW0R/Fifth.png" className="moon lax" data-lax-translate-y='0 0, 800 500'/>
      <img src="https://i.ibb.co/k0r241B/Sixth.png" className="sky" data-lax-translate-y='0 0, 3000 200'/>
    </div>
    <div className="content lax" data-lax-translate-y='0 0, 950 -400'>
      <div className="text lax" data-lax-translate-y='0 0, 3000 100'>
        <h2>Happy Diwali</h2>
        <p>
            Wish you a joyous and prosperous Diwali! Rejoice on this blessed occasion and spread sparkles of peace and goodwill. Have a Happy Diwali! Hope the festival of lights brings your way bright sparkles of peace, contentment, joy, and happiness which stays with you throughout this year and also in the years to come
        </p>
        <h3>- BALA</h3>
    </div>
      <img src="https://i.ibb.co/wNrd9zq/panda.png" className="panda lax" data-lax-translate-y='0 0, 3000 1200'/>
    </div>
     
    </div>
  );
}

export default App;
