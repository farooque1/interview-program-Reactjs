import React from 'react'
import {Link} from "react-router-dom";

function Nav() {
  return (
    <div>
        <ul>   
            <li> <Link to="/about"> Class Component </Link> </li>
            <li> <Link to="/contactus"> Axios </Link> </li>
            <li> <Link to="/product"> Product </Link> </li>
            <li> <Link to="/postaxios"> Post method </Link> </li>
            <li> <Link to="/hooks"> Hook's </Link> </li>
            <li> <Link to="/hooksobj"> Hook's Obj</Link> </li>
            <li> <Link to="/hooksarray"> Hook's Array</Link> </li>
            <li> <Link to="/contextapi"> Context API Class</Link> </li>
            <li> <Link to="/context"> Context API Function</Link> </li>
            <li> <Link to="/context"> HOC </Link> </li>
            <li> <Link to="/fetchapi"> Fetch API</Link> </li>
            <li> <Link to="/varible"> Varible Var, Lets, Const </Link> </li>
            <li> <Link to="/func"> Clouser,Promise's,Async & await</Link> </li>
            <li> <Link to="/fetchapi"> setTimeout ,setInterval and clear</Link> </li>
            <li> <Link to="/formvalidate"> Form Validation </Link> </li>
            <li> <Link to="/api"> API</Link> </li>
            <li> <Link to="/project"> Project 1</Link> </li>
            <li> <Link to="/ques"> Practice</Link> </li>
            <li> <Link to="/local"> Local Storage</Link> </li>
            <li> <Link to="/my"> My Program </Link> </li>
            <li> <Link to="/redux"> Redux</Link> </li>
            <li> <Link to="/pure"> Pure Component</Link> </li>
            <li> <Link to="/encrypt"> Encrypt Text Component</Link> </li>
            <li> <Link to="/urltobar"> URL TO Barcode</Link> </li>
            <li> <Link to="/qr"> Text To QR Code</Link> </li>
            <li> <Link to="/short"> URL shortener</Link> </li>
            <li> <Link to="/image-to-text"> Image To text </Link> </li>
            <li> <Link to="/speech-to-text">  text To Speech </Link> </li>
            <li> <Link to="/find-location">  Findlocation </Link> </li>
            <li> <Link to="/Color-picker">  Color Picker </Link> </li>
            <li> <Link to="/Image-to-Color">  Image To Color  </Link> </li>
            <li> <Link to="/Image-to-Color"> Search Image </Link> </li>
            <li> <Link to="/test"> Test interview Class</Link> </li>
            <li> <Link to="/test2"> Test interview 2 Function</Link> </li>
            <li> <Link to="/email"> Email Test </Link> </li>
            
            

        </ul>
      
    </div>
  )
}

export default Nav
