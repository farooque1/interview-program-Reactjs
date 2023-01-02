import React, { useState,useEffect } from 'react'

function Hooks() {

    // console.log("component Did Mount life cycle");
    const [name, setName] = useState(' M.Farooque ');
    const [count ,setCount]= useState(0);
    const [count1 ,setCount1]= useState(0);

    const stateHandle = () => {
        setName("Farooque Shaikh");
    }
    const inc=()=>{
        setCount(count + 1);
    }
    const dec=()=>{
        setCount1(count1 - 1);
    }
    useEffect(() => {
        return () => {
            console.log("component Did Update life cycle");
        };
    },[count1,count])

    return (

        <div>
            <h1>Hook's</h1>
            {name}
            <button onClick={stateHandle}>Click me</button>
            <button onClick={inc}> Increment {count}</button>  
            <button onClick={dec}> decrement count {count1}</button>
            

            {/* <button onClick={dec}> decrement {count1}</button> */}
        </div>
    )
}

export default Hooks
