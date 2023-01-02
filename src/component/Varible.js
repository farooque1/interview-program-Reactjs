import React,{useState} from 'react'

function Varible() {

    // var a=20;

    // const Var =()=>{

    //     console.log(a);
    // }
    // Var();
    // console.log(a);
     
    //function scope
    // const Var1 =()=>{
    //     var b=50;
    //     console.log(b);
    // }
    // Var1();
    // // console.log(b);


    // var c=20;
    //     console.log(c);
    // var c=10;
    //     console.log(c);
    // c=35;
    //     console.log(c);

    // console.log(a);
    // var a = 10;

    let a=10;
    const fun=()=>{
        let b=20;
        console.log(a);
        console.log(b);
    }
    fun();



    let c=20;
    const fun1=()=>{
        
        if(true){
            let b=30;
            console.log(b);
        }
        // block scop
        // console.log(b);
    }
    fun1();
    console.log(c);


        let dem=22;
        
        if(true){
            let dem=29;
            console.log(dem)
        }

        console.log(dem)

        const [msg,setmsg]=useState('Hello msg1');
        const msg1=(msg)=>{
            setmsg(msg);
            console.log(msg);
        }    
    return (
    <div>
        <h1>Varible in ES6 and there concepts</h1>
        Parent Component<br />
           {/* <p>Varible A value is {a}</p> <br></br>
            <p>C value is  {c} </p> */}
              {msg}  
              <br />
            <Child msg1={msg1} />
    </div>
  )
}
const Child=({msg1})=>{
    let msg2='How Are You Msg-2';
    return(
        <div>

            <button className='btn btn-primary' onClick={()=>msg1(msg2)}>
            Send msg
            </button>
            <br />Child Component<br />
            {msg2}           

            <Child2 msg1={msg1} />
        </div>
    )
}


const Child2=({msg1})=>{
    let msg3='Message 3';
    return(
        <div>

            <button className='btn btn-primary' onClick={()=>msg1(msg3)}>
            Send msg3
            </button>
            <br />Child2 Component<br />
            {msg3}           
        </div>
    )
}

export default Varible

