import React, { Component } from 'react'
import {Consumer} from './Context';

export class ComponentB extends Component {
  
    render() {
    return (
      <div>
            <h1>Component B</h1>
        {/* <mycontext.Consumer> */}
        
        <Consumer>
            {
                data=><h3>{data.name}</h3>
            }
        </Consumer>

        {/* </mycontext.Consumer> */}

      </div>
    )
  }
}

export default ComponentB
