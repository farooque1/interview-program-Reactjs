import React, { Component } from 'react'
import axios  from 'axios'
import { wait } from '@testing-library/user-event/dist/utils'

export class Contactus extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      posts:[],
      error:''       
    }
  }
  
  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(response =>{
      this.setState({posts:response.data});
      console.log(response);
    })
    .catch(error =>{
      this.setState({error:'URL error.....'})
      console.log(error)
    })

    console.log("componentDidMount");
  }

  render() {
    const {posts,error}=this.state
    return (
      <div>
        <h1>Axios Methods Call</h1>
          <h2>Json Data List</h2>
            {
                posts.length ?
            posts.map(post=> 
             <div key={post.id}>
             <h3>ID is :- {post.id}</h3>
             <h3>Title :-{post.title}</h3>
             <h4>Body :- {post.body}</h4>
             </div> 
              ) :null
            }
            
            {
              error ? <div>{error}</div>:null
            }
      </div>
    )
  }
}

export default Contactus
