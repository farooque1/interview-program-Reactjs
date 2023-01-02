import {BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import Main from "./component/Main";
import CHeader from "./component/CHeader";
import About from "./component/About";
import Contactus from "./component/Contactus";
import Findmore from "./component/Findmore";
import Nav from "./component/Nav";
import Product from "./component/Product";
import Postaxios from "./component/Postaxios";
import Hooks from "./component/Hooks";
import Hooksobj from "./component/Hooksobj";
import Hooksarray from "./component/Hooksarray";
import Context from "./context/ComponentA";
//import context from "./context/ComponentB";
import Contextapi from './Contextfun/A';
import Fetchapi from "./component/Fetchapi";
import Formvalidate from "./component/Formvalidate";
import Axios from "./component/Axios";
import Home from "./Project/Home";
import Varible from "./component/Varible";
import Func from "./component/Func";
import Question from "./component/Question";
import Local from "./component/Local";
import Productlist from "./component/Productlist";
import Productdetails from "./component/Productdetails";
import Cartdetails from "./component/Cartdetails";
import { useSelector } from "react-redux";
import My from "./component/My";
import PureComp from "./component/Purecomp";
import Encrypt from "./component/Encrypt";
import Urltobarcode from "./component/Urltobarcode";
import Texttoqr from "./component/Texttoqr";
import Urlshorts from "./component/Urlshorts";
import Imagetotext from "./component/Imagetotext";
import Speectotext from "./component/Speectotext";
import Findlocation from "./component/Findlocation";
import Colorpicker from "./component/Colorpicker";
import ImageColor from "./component/ImageColor";
import Test from "./component/Test";
import Test2 from "./component/Test2";
import Email from "./component/Email";

function App() {  

const getdata = useSelector((state) => state.Cart);

console.log(getdata);



const url='/project';


const data = [15,11,6,9,3,2,8];
const Asort = data.sort((a,b)=>a-b);
console.log(Asort)

const Dsort = data.sort((a,b)=>b-a);

console.log(Dsort)
//[9,6,5,3,1]

name="farooque";
var name;

// name="farooque";
// let name;

 console.log(name)

let name1="";

let name2;

console.log(name1);
console.log(name2);

//Hositing

sum(4,7);

function sum(a,b){
 var add=a+b;
  console.log(add);
}

//  summer(4,17);
console.log(summer);
var summer = function(x,y){
  var added=x+y;
   console.log(added);
 }
 
 console.log(summer);
 summer(4,17);

// divi(2,5);

const divi=(x,y)=>{
  var div=x*y;
   console.log(div);
}
//divi(2,5);

console.log(typeof "farooque");
console.log(typeof 123);
console.log(typeof null);
console.log(typeof undefined);

  return (

    <Router>
    <>

    <div class="container">
    <header class="d-flex flex-wrap justify-content-center py-3 border-bottom">
      <ul class="nav nav-pills">
        <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Home</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Features</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Pricing</a></li>
        <li class="nav-item"><a href="#" class="nav-link">FAQs</a></li>
        <li class="nav-item"><a href="#" class="nav-link">About</a></li>
      </ul>
    </header>
  </div>

    <div className="container-fluid">
    <div className='row'>      
        <div className='col-lg-3 col-md-6 mt-2 px-1'>
        <div class="overflow-scroll d-flex flex-column flex-shrink-0 p-3 bg-light" style={{height:'650px'}}>
        <hr />
    <ul class="nav flex-column mb-auto">
      <li class="nav-item">
        <a href="#" class="nav-link" aria-current="page">
          <Nav />
        </a>
      </li>
    </ul>
  </div>
  
        </div>
        
        <div className='col-lg-8 col-md-6 mt-5'>
        <Routes> 
          <Route exact path="/about" element={ < About />} />
          <Route exact path="/contactus" element={ < Contactus />} />
          <Route exact path="/findmore" element={ < Findmore /> } />
          <Route exact path="/product" element={ < Product /> } /> 
          <Route exact path="/postaxios" element={ < Postaxios /> } />
          <Route exact path="/hooks" element={ < Hooks /> } />
          <Route exact path="/hooksobj" element={ < Hooksobj /> } />
          <Route exact path="/hooksarray" element={ < Hooksarray /> } />
          <Route exact path="/contextapi" element={ < Context /> } />
          <Route exact path="/context" element={ < Contextapi /> } />
          <Route exact path="/fetchapi" element={ < Fetchapi /> } />
          <Route exact path="/formvalidate" element={ < Formvalidate /> } />
          <Route exact path="/api" element={ < Axios /> } />
          <Route exact path="/varible" element={ < Varible /> } /> 
          <Route exact path="/project" element={ < Home /> } />
          <Route exact path="/func" element={ < Func /> } />
          <Route exact path="/ques" element={ < Question /> } /> 
          <Route exact path="/local" element={ < Local /> } />
          <Route exact path="/my" element={ < My /> } />
          <Route exact path="/redux" element={ < Productlist /> } />
          <Route exact path="/cartdetails" element={ < Cartdetails /> } />
          <Route exact path="/productdetails/:id" element={ < Productdetails /> } /> 
          <Route exact path="/pure" element={ < PureComp /> } /> 
          <Route exact path="/encrypt" element={ < Encrypt /> } />
          <Route exact path="/urltobar" element={ < Urltobarcode /> } />
          <Route exact path="/qr" element={ < Texttoqr /> } /> 
          <Route exact path="/short" element={ < Urlshorts /> } /> 
          <Route exact path="/image-to-text" element={ < Imagetotext /> } />
          <Route exact path="/speech-to-text" element={ < Speectotext /> } />
          <Route exact path="/find-location" element={ < Findlocation /> } />
          <Route exact path="/Color-picker" element={ < Colorpicker /> } />
          <Route exact path="/Image-to-Color" element={ < ImageColor /> } />
          <Route exact path="/test" element={ < Test /> } />
          <Route exact path="/test2" element={ < Test2/> } />          
          <Route exact path="/email" element={ < Email/> } />          

      </Routes>
        </div>
      </div>
      </div>

    </>
    </Router>
  );
}

export default App;