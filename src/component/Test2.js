import React, { useEffect, useState } from 'react'
import About from '../Project/About'
import CustomeLabel from './CustomeLabel'
import axios from 'axios'

function Test2() {

  const [changecolor,setcolor]=useState();
  const [bgcolor,setbgcolor]=useState();
  const [inc,setinc]=useState(0);

  const Incr=()=>{
    setinc(inc+1);
  }
  const color=(e)=>{
    setcolor(e.target.value);
  }
  const backcolor=(e)=>{
    setbgcolor(e.target.value);
  }

  useEffect(()=>{
    axios.get('url')
    .then(res=>{
      console.log(res);
    })
    .catch(err=>{
      console.log(err);
    })
  },[])

    
  return (
    <>
        <div>Test2 Question</div>
        <div>
            <About  title='Hello Title' button='My Button' />
            <CustomeLabel name="Farooque demo props"  number='12'/>
            <h1>{inc}</h1>
            <button onClick={Incr}>Increment Number</button>
            <br /><br />
            <input type={changecolor} onChange={color} className='form-control' /><br />
            <button style={{color:changecolor}}>My Button</button>
            <input type={bgcolor} onChange={backcolor} className='form-control' /><br />
            <button style={{backgroundColor:bgcolor}}>My Button</button>
            <br />
        </div>
    </>
    
  )
}

export default Test2