import React,{useState} from 'react'
import './Main.css';
const Main = (props) => {

//props
//state
//functional component
//event
//fragments
//list

  const [age,setage]= useState(20);
  const [updateage,setUpdateage]= useState(30);
  const [fruit, setFruit] = useState('banana');

  const [name, setname] = useState('');
  const [number, setnumber] = useState('');

  const submit=(event)=>{
    
    event.preventDefault();
    alert(`Name is : ${name} Number is ${number}`);

    console.log('name is '+name+ ' number is ' +number)
    console.log()
  }

    function change() {
      setage('22');
      alert("Hi event.....");
      console.log("Onclick event press.....")
    }

    function handleOrangeClick() {
      // Similar to this.setState({ fruit: 'orange' })
      setFruit('orange');
    }

    const numbers=[1,2,3,4,5,6,7,8];
    // const newnumber=numbers.map((numbers)=>{
    //   return<li>{numbers}</li>
    // })
    console.log(numbers)

    const users=[
      {id:1,name:"MAHESH",class:"A"},
      {id:2,name:"PANDEY",class:"B"},
      {id:3,name:"AJIT",class:"C"},
      {id:4,name:"SOHAIL",class:"D"},
      {id:5,name:"KARAN",class:"E"}
    ]

    const newusers=users.map(function(user){
      return (
        <>
        <table>
          <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>CLASS</th>
          </tr>
          <tr>
            <td key={user.id}>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.class}</td>
          </tr>  
        </table>
        </>
        );
        })




        
  return (   
   <>
        <h1>Interview question</h1>
        {/* //props */}
        <h1>I'm {props.name} Qualification ,{props.qualification}</h1>
        {/* event handling */}
        <button onClick={change}>Click me</button><br></br><p>My age is {age}</p>
        
        
        <button onClick={handleOrangeClick }>change state value</button><br></br><p>Is {fruit}</p>
        
        
        <button onClick={()=>setUpdateage(updateage + 1)}>increment state value</button><p>Update age {updateage}</p>

        {/* <ul>{newnumber}</ul> */}
        <p>{newusers}</p>

        <ul>
          {/* map  */}
          {
            numbers.map(
                (numbers)=> 
                <li key={numbers}>{numbers}</li>
                       )
          }
        </ul>
        <table>
          <thead>         
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>CLASS</th>
          </tr>
          </thead>
         {/* data fetch from json */}
         
        { users.map ((user) => ( 
         <tbody>
         <tr>
            <td key={user.id}>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.class}</td>
          </tr> 
          </tbody>
         ))} 

         </table>

          <br></br>
         
         <form onSubmit={submit}>
          
          <label>Name</label>
          <input type="text" value={name} onChange={(e)=>setname(e.target.value)}></input>

          <label>Number</label>
          <input type="text" value={number} onChange={(e)=>setnumber(e.target.value)}></input>

          <button type='submit'>Submit</button>

         </form>
    </>
  )
}

export default Main;