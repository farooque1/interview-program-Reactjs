import React,{useState} from 'react'
import {Provider} from './Contextdata'
import B from './B';

function A() {

    const [name,setName]=useState({name1:'Farooque Shaikh',city:'Mumbai',State:'Maharashtra'});
    
    return (
    <div>
        <h1> Function Component A </h1> 
           <p>{name.name1}</p>
           <p>{name.city}</p>
           <p>{name.State}</p>

           <Provider value={name}>
            
            <B />            
            
            </Provider>                          
    </div>
  )
}

export default A
