import React,{useState,useEffect,useMemo} from 'react'
import axios from 'axios';

function Axios() {

    const [loading, setLoading] = useState(true);
    const [items,setItem]=useState([]);
    const [users,setusers]=useState([]);

        useEffect(()=>{

            axios.get('https://jsonplaceholder.typicode.com/posts')
            .then (res => {
            console.log(res.data)
            setItem(res.data)    
        
            axios.get()
            .then(res)
            console.log(res)
            .catch()    

        })
            .catch(err=>console.log(err));
    
        },[])



        useEffect(() => {    
     
            const fetchusers=async () =>{
                const res =await fetch("https://randomuser.me/api/?results=10");
                const data=await res.json();
                console.log(data)
              
                try{setusers(data.results);}
                catch(err)
                {console.log(err);}
            };
        
        },)

// useMemo( ()=>{
//             axios.get('https://jsonplaceholder.typicode.com/posts')
//             .then (res => {
//             console.log(res)
//             setItem(res.data)    
//         })
//             .catch(err=>console.log(err));},[items])

    
    return (
        
    <div>
        <h1>Hello problem</h1>
        {items.map(item =>(<div key={item.id}>
        <ul>
        <li>{item.id}</li>
        <li>{item.title}</li>
        <li>{item.body}</li>
        </ul>
        </div>))}        

        <br></br>
        {
                users &&users.map(u =>(
                    <li key={u.login.uuid}>{u.name.first}</li>
                ))}
    
    </div>
     )
}

export default Axios
