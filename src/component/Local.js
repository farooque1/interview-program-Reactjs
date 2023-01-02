import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Local() {

    const getlocalitem = () => {
        let list = localStorage.getItem('user_details');
        console.log(list);

        if (list) {
            return JSON.parse(localStorage.getItem('user_details'));
        } else {
            return [];
        }
    }

    const [items, setItems] = useState(getlocalitem());
    const [inputData, setInputData] = useState('');
    const [data, setdata] = useState([]);
    const [inpval, setinpval] = useState({
        email: "",
        password: "",
        url: ""
    });
    console.log(inputData);

    if (!inputData) {
    } else {
        setItems([...items, inputData]);

        console.log(setInputData);
    }
    console.log(inpval);

    const getdata = (e) => {
        const { value, name,id } = e.target;
        setinpval(() => {
            return {...inpval,[id]: value}
        })
    }
    
    //validation and store data in local storage
    
    const addData = (e) => {
        e.preventDefault();
        //console.log(inpval);
        const { email, password, url } = inpval;
        if (email === "" || password === "" || url === "") {
            alert("Fields is requred")
        } else {
            console.log("data added successfully");
            localStorage.setItem("user_details", JSON.stringify([...data, inpval]));
        }
    }

    return (

        <>
            <div className='container'>
                {
                    items.map((elem, ind) => {
                        return (
                            <div>
                                <form>
                                    <input type="text" name="" value={elem.email} className='form-control my-4' />
                                    <input type="text" name="" value={elem.password} className='form-control my-3' />
                                    <input type="text" name="" value={elem.url} className='form-control my-4' />
                                </form>
                            </div>
                        )
                    })
                }
            </div>

            <div className='container'>
                <Form>
                    <Form.Group className="col-lg-6 mb-3" controlId="formBasicEmail">
                        <Form.Label>input type or match filed</Form.Label>
                        <Form.Control type="text" id="email" onChange={getdata} placeholder="Match fileds" />
                    </Form.Group>

                    <Form.Group className="col-lg-6 mb-3" controlId="formBasicPassword">
                        <Form.Label> value </Form.Label>
                        <Form.Control type="text" id="password" onChange={getdata} placeholder="enter value" />
                    </Form.Group>

                    <Form.Group className="col-lg-6 mb-3" controlId="formBasicPassword">
                        <Form.Label>URL</Form.Label>
                        <Form.Control type="text" id="url" onChange={getdata} placeholder="URL..." />
                    </Form.Group>

                    <Button variant="primary" className='col-lg-6 mb-5' onClick={addData} type="submit">
                        Submit
                    </Button>
                </Form>

            </div>


        </>
    )
}

export default Local
