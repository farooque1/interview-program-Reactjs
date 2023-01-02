import React, { Component } from 'react'
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';
import ComponentD from './ComponentD';
// export const mycontext=React.createContext();

import {Provider} from './Context'

export class ComponentA extends Component {
       
        constructor(props) {
            super(props)
        
            this.state = {
                 name:'Farooque Component A',
                 roll:20,
                 division:'A'
            }
        }
        
render() {
    return (
      <div>

        <h1>Component A</h1>
        <p><b>SEND Value from Component A to all Component </b></p>
        name is :- {this.state.name} ,
        roll :- {this.state.roll} ,
        Class :- {this.state.division}

        {/* <mycontext.Provider value={this.state}> */}
        
        <Provider value={this.state}> 
        <ComponentB />
        <ComponentC />
        <ComponentD />
        </Provider>

        {/* </mycontext.Provider> */}

      </div>
    )
  }
}

export default ComponentA
