import React from 'react'

function About(props) {

    return (

    <div id='about'>
        <div className='about-image'>
            <img src={props.image} atl='' />
        </div>
        <div className='about-text'>
            <h2>{props.title}</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
               when an unknown printer took a galley of type and scrambled it to make a type
               specimen book.</p>
               <button>{props.button}</button>
        </div>
    </div>
  )
}

export default About;
