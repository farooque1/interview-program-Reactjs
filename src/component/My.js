import axios from 'axios';
import React, { memo,useState } from 'react'
import { useEffect } from 'react';

function My() {

  const [inc,setInc]=useState(0);
  const [dec,setdec]=useState(0);
  const [text,setcolor]=useState();
  const [background,setbackground]=useState();
  const [d,setd]=useState([]);
  const [i,setItems]=useState([]);

  var a=['mohammed','farooque','shaikh','xyz','abc'];
  
  var [other,,]=a;
  console.log(other);

  let api=['a','b','c'];
  api.forEach(e=>console.log(e));
  
  const name="farooque shaikh";
  const resn=[...new Set(name)];

  console.log(resn);

  useEffect(()=>{
      axios.get('https://randomuser.me/api/?results=10')
      .then(res=>{
        console.log(res.data.results)
        setItems(res.data.results)
      }
      )
      .catch(err=>console.log(err))
  },[])

  const incerement=()=>{setInc(inc+1);}
  const decrement=()=>{setdec(dec-1);}

  const colors=(e)=>{
    setcolor(e.target.value);
    console.log(text)
  }

  const backcolors=(e)=>{
    setbackground(e.target.value);
    console.log(background)
  }
  useEffect(()=>{
    
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res=>{
    console.log(res.data)
      setd(res.data)}
      )
    .catch(err=>{console.log(err)})
  },[])

  const CustomLabel=({ name }) => {
    return (
      <>
        {console.log("CustomLabel component render")}
        <label>
          <b>{name}</b>
        </label>
      </>
    );
  };
   
  return (
    <>
        <div>

          {
            i.map(data=>(
            <div>
              <ul key={data.nat}>
              <li>{data.name.first}</li>
                <li>{data.cell}</li>
                <li>{data.gender}</li>
                <li>{data.email}</li>
                <li>{data.phone}</li>
              </ul>
            </div>
            ))
          }


            <ul> Demo practies program </ul>
            <li>increment & decrements</li>
            <li>Maps fetch </li>
            <li>Color change on button</li>
            <li>array</li>
            <li> HOC </li>
            <li> Context </li>
            <li> Filter doublicate name </li>
            <li> more find </li>
            
          <div>
              <h1>Increment number</h1>
              <button onClick={incerement}>Increment no {inc}</button>
              <button onClick={decrement}>decrement no {dec}</button>

              <div className='mt-5 mb-3'>
              <input type="text"  placeholder='Text color name' onChange={colors}/>
              <input type="text"  placeholder='Background color name' onChange={backcolors}/>
              <button style={{color:text,backgroundColor:background}}> Color </button>
              </div>

              <table className='container mt-5 mb-5'>
                
                <tr>
                  <th>ID</th>
                  <th>TITLE</th>
                  <th>BODY</th>
                  </tr>
                  
                  {
                    d.map((item) =>(
                   
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.body}</td>
                      </tr>
                    ))
                  }
                  </table>
          </div>

        </div>

        
    </>
    
  )
}

export default memo(My)