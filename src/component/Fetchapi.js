import React, { useEffect, useState } from 'react'

function Fetchapi() {

    const [data, setData] = useState([]);
    const [photo,setPhoto] = useState([]);
    

    useEffect(() => {
        return () => {
            let link = "https://jsonplaceholder.typicode.com/posts";
            fetch(link)
                .then(r => r.json())
                .then(data =>{setData(data)});
        };
    }, [])

    useEffect(()=>{
        return ()=>{
            fetch("https://jsonplaceholder.typicode.com/photos")
            .then(res => res.json())
            .then(photo => {setPhoto(photo)});
        }
    },[photo])


    console.log(data);
    console.log(photo);

    // https://jsonplaceholder.typicode.com/photos

    // let link="https://jsonplaceholder.typicode.com/posts";
    // fetch(link)
    // .then(r => r.json()).then(data => console.log(data));

    return (
        <div>
            <h1>Fetch Api Data</h1>
            
            <h3>First Api call</h3>
            <table>
                <tr>
                    <td>ID</td>
                    <td>TITLE</td>
                    <td>BODY</td>
                </tr>
                {
                    data.map((item)=>
                
                <tr>
                    <td key={item.id}>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.body}</td>
                </tr>
                )}
            </table>


            <h3>Second Api call</h3>
            <table>
                <tr>
                    <td>ID</td>
                    <td>Title</td>
                    <td>Thumbnail URL</td>
                    <td>Image URL</td>
                </tr>
                {
                    photo.map((photos)=>
                
                <tr>
                    <td key={photos.id}>{photos.id}</td>
                    <td>{photos.title}</td>
                    <td><img src={photos.thumbnailUrl} style={{width:'100px'}}></img></td>
                    <td><img src={photos.url} style={{width:'100px'}}></img></td>
                </tr>
                )}
            </table>
        </div>
    );
}

export default Fetchapi
