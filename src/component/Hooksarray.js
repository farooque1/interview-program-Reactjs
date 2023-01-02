import React,{useState} from 'react'

function Hooksarray() {
  const [items,setItem]=useState([]);
    
  const additem=()=>{

    console.warn(items)
    setItem([...items,{
        id:items.length,
        value:Math.floor(Math.random() * 1000)  
    }])
    console.warn(items.value)
    }

    return (

<div>
            <button onClick={additem}>Add Random number</button>
            <ul>
                {
                    items.map(item=>(
                        <li key={item.value}>{item.value}</li>
                    ))
                }
            </ul>
    </div>
  )
}

export default Hooksarray