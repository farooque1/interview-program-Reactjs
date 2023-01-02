import React from 'react'
import Header from './Header';
import Feature from './Feature';
import About from './About';
import about from './images/Frame 19.png';
import about1 from './images/download.png';
import Contact from './Contact'; 
function Home() {
  return (
    <div className='App'>
       <Header />
       <Feature /> 
        <About image={about} title='Comes With Your Need For Daily Life' button='Get The App' />
        <About image={about1} title='Download App now And Enjoy' button='Download App' />

        <Contact />     
    </div>
  )
}

export default Home
