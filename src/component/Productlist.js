import React, { useState, useEffect } from 'react'
// import Skeleton from "react-loading-skeleton";
import {Link} from "react-router-dom";

function Productlist() {

    const [data, setdata] = useState([]);
    const [loading, setloading] = useState(false);

    useEffect(() => {

        const getproduct = async () => {
            setloading(true);
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            console.log(data);

            try {
                setdata(data);
                setloading(false);
            }
            catch (err) {
                console.log(err);
            }
        }

        getproduct();
    }, [])

    const Loading = () => {
        return (
            <>
            Loading .....

                {/* <div className='col-md-3 mt-5 '>
                    <Skeleton  height={350} /> 
                </div>
                <div className='col-md-3 mt-5'>
                    <Skeleton  height={350} /> 
                </div>
                <div className='col-md-3 mt-5'>
                    <Skeleton  height={350} /> 
                </div>
                <div className='col-md-3 mt-5'>
                    <Skeleton  height={350} /> 
                </div> */}
            </>
        );
    };

    const Showproducts = () => {
        return (
            <>
                {
                    data.map((product) => {
                        return (
                            <>
                            <div className='col-md-3 mt-5 '> 
                                <div class="card h-80 text-center p-4" key={product.id}>
                                    <img src={product.image} class="card-img-top" alt={product.title}  height="250px" />
                                        <div class="card-body">
                                            <h5 class="card-title mb-0">{product.title.substring(0,10)}</h5>
                                            <p class="card-text">${product.price}</p>
                                            <Link to={`/productdetails/${product.id}`} class="btn btn-outline-dark">Buy Now</Link>
                                            {/* <a href="{product.id}" class="btn btn-primary">Buy Now</a> */}
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

    return (

        <>
            <div className='container'>
            <div className='row justify-content-center'>
                {loading ? <Loading /> : <Showproducts />}
            </div>
            </div>
        </>
    )
}

export default Productlist
