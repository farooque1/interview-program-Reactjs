import { render } from '@testing-library/react'
import React, { Component } from 'react'

export class About extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color:"Red",
      name:"Javascript"
    } }
  componentDidMount(){
    // setTimeout( ()=>{
    //   this.setState({color:"Yellow"})
    // },5000)

    console.log("componentDidMount   Execute after component render");
  }

  componentDidUpdate() 
  { 
      console.log(" componentDidUpdate() component update"); 
  }

  changeColor =()=>{
    this.setState({color:"Black......."});
  }
  
  render() {
    return (
      <div className='about'>
          <h1>Class Component</h1>
          <h2>value come from state " {this.state.name} "</h2>
          <h2> state value change after 2sec " {this.state.color} "</h2>
          <button type='button' onClick={this.changeColor}> Change color </button>    
      </div>
    )
  }
}

export default About;