import React, { Component } from 'react'
import axios from 'axios'

export default class Test extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            myname:'farooque test',
            mysalary:'xyz',
            delete: false
        }
        console.log(this.state)
    }

    componentDidMount(){
        setTimeout( ()=>{
      this.setState({color:"Yellow"})
    },5000)

    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res=>{
        this.setState(res.data)
        console.log(res.data);
    })
    .catch(err=>{
        console.log(err);
    })

    console.log("componentDidMount");
    
    }
    componentDidUpdate(){
        console.log('Component update');
    }
    Color=()=>{
        this.setState({myname:"Khan Farooque"});
    }

  render() {
    return (
        <>
        <div>
                  Test Question
            <h1>{this.state.myname}</h1>    
            <button onClick={this.Color}>Change My name</button>

        </div>

        <button onClick={() => this.setState({ delete: true })}>
               Delete Users
            </button>
            {this.state.delete ? null : <User />}


        </>
      
    )
  }
}

class User extends React.Component {
    componentWillUnmount() {
       console.log('componentWillUnmount lifecycle call');

    }
    render() {
       return (
          <div>
             <h3>Username: Rahul</h3>
             <h3>Email: rbbansal558@gmail.com</h3>
          </div>
       );
    }
 }
 