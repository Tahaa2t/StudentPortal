import React from 'react'
import Navbar from './Navbar'
import './css/homepagestyle.scss'
import profilepic from './pics/placeholder image.jpg'
import {MDCRipple} from '@material/ripple';

const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';
const ripples = [].map.call(document.querySelectorAll(selector), function(el) {
  return new MDCRipple(el);
});

const HomePage = () => {
  return (
    <div className='main-container'>
      <div class="mdc-card">
      <div class="mdc-card__primary-action" tabindex="0">
    {/* <!-- content within actionable area --> */}
    <div class="mdc-card__ripple"></div>
  </div>
  <!-- ... content ... -->
      </div>
      {/* <input></input>
      <div className='user-info'>
        <div className='personal-info'>
          <img src={profilepic}></img>
          <div className='written'>
            <h2>Taha Tanveer</h2>
            <p>BSCS</p>
            <button>show more </button>
          </div>
        </div>
        <div className='Educational-info'>

        </div>
        <div className='assignments'></div>
        <div className='courses'></div>
      </div> */}
    </div>

  )
}

export default HomePage