import React,{useState,useEffect} from 'react'
import axios from './Axios';

function Func() {
    
    const [users,setusers]=useState([]);
    const [repo,setrepo]=useState([]);

    
    
    const fetchusers=async () =>{
        const res =await fetch("https://randomuser.me/api/?results=10");
        const data=await res.json();
        console.log(data)
  try{setusers(data.results);}
    catch(err)
    {console.log(err);}
    };

    
    var mypromies= new Promise((res,rej)=>{
        
    });

    useEffect(()=>{
        fetchusers();
    },[])
    
    function ClouserFunc() {
        const name = 'Mozilla';
        
        function displayName() {
          console.log(name);
        }

        return displayName;
      
    }
      
      const myClouserFunc = ClouserFunc();
      myClouserFunc();


      let promise = new Promise((resolve,reject)=>{
        const x = "1";
        const y = "10";

        if(x===y){
            resolve();
        }else{
            reject();
        }

      });
       
      promise.then( ()=>{
            console.log('Promies -> success');
        }). catch(()=>{
            console.log('Promies -> error');
        })


    return (
        <div>
            {
                users &&users.map(u =>(
                    <li key={u.login.uuid}>{u.name.first}</li>
                ))}
        </div>
  )
}

export default Func
