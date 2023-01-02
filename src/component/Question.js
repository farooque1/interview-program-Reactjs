import React,{useState,useEffect} from 'react'
import axios from 'axios';

function Question() {

    const [color,setcolor]=useState('lightgreen');
    const [background, setbackground]=useState();

    const [datas,setdata]=useState([]);
  const changecolor=(e)=>{
        setcolor(e.target.value);
        console.log(color);
    }

    useEffect(() => {
       let obj= {background:color};
       setbackground(obj);
    },[color]);
    

    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res=>{
        console.log(res.data);
        setdata(res.data);
      })
      .catch(err=>{
        console.log(err)
      })      
    }, [])


    var string = "Welcome to this Javascript Guide!";

// Output becomes !ediuG tpircsavaJ siht ot emocleW
var reverseEntireSentence = reverseBySeparator(string, "");

// Output becomes emocleW ot siht tpircsavaJ !ediuG
var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");

function reverseBySeparator(string, separator) {
  return string.split(separator).reverse().join(separator);
}

let arr = ["a", "b", "c", "d", "e", "a", "b", "c", "f", "g", "h", "h", "h", "e", "a","z","z","z"];
const counts = {};
arr.forEach((x) => {
  counts[x] = (counts[x] || 0) + 1;
});
console.log(counts)

  useEffect(() => {
    let arr = ["a", "b", "c", "d", "e", "a", "b", "c", "f", "g", "h", "h", "h", "e", "a"];
    axios.get(arr)
    .then(result=>{
      console.log(result)
    })
    .catch();

  },)

    return (
    <div className='container'>
       {/* <nav>
        Top Nav bar
      </nav>  */}
      <div className='row'>
        <div className='col-lg-4'>
          Side bar
        </div>

        <div className='col-lg-8'>
          Main Tab
        </div>

      </div>



      <p>{arr}</p>


      {

        arr.map((ar,index)=>(
          <div>
            <li>{ar}</li>
          </div>
        ))
      }
     <p>{string}</p> 
<p>{reverseEachWord}</p>
        <input className='form-control ' type='text' value={color} onChange={changecolor} />
        <button className='form-control mb-5' style={background}> Click me !!! </button>
        {
          datas.map(data=>(<div>
            <li key={data.id}>{data.title}</li>
          </div>))
        }        

        
    </div>
  )
}

export default Question
