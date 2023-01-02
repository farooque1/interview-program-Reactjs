import React from 'react'
import Nav from './Nav';

import './style.css';

function Header() {
  return (
    <div id='main'>
        <Nav />

        <div className='name'>
            <h1><span>Launch Your App</span> with Confidence And Creativity</h1>
            <p className='details'> Lorem Ipsum is simply dummy text of the printing and typesetting 
            industry. </p>
            <a href="#" className='cv-btn'> Download </a>
        </div>
        
    </div>
  )
}

export default Header
