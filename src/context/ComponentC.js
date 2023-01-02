import React, { Component } from 'react'
// import {mycontext} from './ComponentA';
import {Consumer} from './Context';

export class ComponentC extends Component {
  
    render() {
    return (
      <div>

        <h1>Component C</h1>

         <Consumer>
            {
                data=><h3>{data.roll}</h3>
            }

        </Consumer>

      </div>
    )
  }
}

export default ComponentC
