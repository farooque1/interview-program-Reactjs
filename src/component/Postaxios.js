import React, { Component } from 'react'
import axios from 'axios';

export class Postaxios extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userid:'',
             title:'',
             body:''
        }}    
    changeHandler =(e)=>{ this.setState({ [e.target.name]: e.target.value }) }

    handlesubmit = (e)=>{
        e.preventDefault()
        console.log(this.state);
        axios.post("https://jsonplaceholder.typicode.com/posts",this.state)
        .then(r =>{ console.log(r); })
        .catch(e =>{ console.log(e); }) }
        
    render() {
        const {userid, title, body}=this.state
    return (
      <div>
        <h1>Post method with Axios Form</h1>

            <form onSubmit={this.handlesubmit}>
                <label>ID</label>
                 <input type='text'  value={userid} name="userid" onChange={this.changeHandler} />
                    <br></br>
                 <label>Title</label>
                 <input type='text'  value={title} name="title" onChange={this.changeHandler} />
                 <br></br>
                 <label>Body</label>
                 <input type='text'  value={body} name="body" onChange={this.changeHandler} />
                 <br></br>
                <button type='submit'>Submit</button>
            </form>

      </div>
    )
  }
}

export default Postaxios
