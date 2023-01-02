import React, { Component } from 'react'
// import {mycontext} from './ComponentA';
import {Consumer} from './Context';

export class ComponentD extends Component {
  
    render() {
    return (

         <div>          
            <h1>Component D</h1>
<Consumer>
   {
       data=><h3>{data.division}</h3>
   }
</Consumer>

         </div>
    )
  }
}

export default ComponentD
