import React,{useState} from 'react'

function Hooksobj() {
 
 const [name,setName]=useState({firstName:'',lastName:''});

 return (
    <div>
        
        <form>
            <div>
            <input type="text" value={name.firstName} onChange={e =>{setName ({...name,firstName:e.target.value}) }} />
            </div>
            <div>
            <input type="text" value={name.lastName} onChange={e =>{setName ({...name,lastName:e.target.value}) }} />
            </div>
          
            {name.firstName}
            {name.lastName}

        </form>

    </div>
  )
}

export default Hooksobj
