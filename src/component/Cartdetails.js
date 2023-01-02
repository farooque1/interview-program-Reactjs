import React from 'react'
import { useSelector } from "react-redux";


function Cartdetails() {

    const getdata = useSelector((state) => state.Cart);
    console.log("Cart details", getdata);

    return (
        <>
        {
            getdata.map((element)=>{
                return(
                    <>
                    <div className='container px-4 my-5 bg-light rounded-3'>
                    <div className='row '>
                        <div className='col-6 mt-3'>
                            <img src={element.image} alt={element.title} height="250px" />
                            </div>
                            <div className='col-6 mt-3'>
                            <p>{element.title}</p>
                            <p>$ {element.price}</p>
                            <i class="fa fa-shopping-cart me-1"></i>
                        </div>
                        </div>
                        </div>
                    </>
                )
            })
        }
        </>
    )
}

export default Cartdetails
