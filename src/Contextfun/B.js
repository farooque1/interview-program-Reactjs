import React from 'react'
import { Consumer } from './Contextdata'


function B() {
  
    return (

    <div>
        <h1> Function Component B </h1>
        <Consumer>
            {
                list=><div>
                    <h2>{list.name1}</h2>
                    <h2>{list.city}</h2>
                    <h2>{list.State}</h2>
                </div>
            }
        </Consumer>
    </div>

)
}

export default B
