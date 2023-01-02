import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
// import Skeleton from 'react-loading-skeleton';
import {Link} from "react-router-dom";
import { ADD } from '../redux/action';
import { useSelector } from "react-redux";


const Productdetails = () => {


    const name="farooque shaikh";

    const res=[...new Set(name.split(""))];

    const result=[new Set(name)];

    console.log(res);
    console.log(result);


    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const getdata = useSelector((state) => state.Cart);

    const dispatch= useDispatch();

    const send = (e) =>{
        console.log(e);
        dispatch(ADD(e));
    }

    useEffect(() => {
        
        const getproduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            const data = await response.json();
            console.log(data);

            try {
                setProduct(data);
                setLoading(false);
            }
            catch (err) {
                console.log(err);
            }
        }
        getproduct();
    }, []);


    const Loading = () => {
        return(
            <>

            Loading.....
            
                {/* {/* <div className="col-md-6">
            <Skeleton height={350}/>
        </div>
        <div className="col-md-6">
            <Skeleton height={50} width={300}/>
            <Skeleton height={70}/>
            <Skeleton height={10} width={150}/>
            <Skeleton height={50}/>
            <Skeleton height={180}/>
            <Skeleton height={50} width={100}/>
        </div> */}

            </>
        )
    }
    const ShowProduct = () => {
        return(
            <>

<nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
                <div className="container">
                    <Link to="/" className="navbar-brand fw-bold fs-4" >EStore</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fs-5">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" > About </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" > Product </Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <Link to="/cartdetails" className="btn btn-outline-dark me-1">
                                <i className='fa fa-shopping-cart fa-1x'></i> Cart {getdata.length}
                            </Link>
                        </form>
                    </div>
                </div>
            </nav>


                <div className="col-md-6">
                    <img src={product.image} alt={product.title} height="400px" width="400px" />
                </div>
                <div className="col-md-6">
                    <h4 className="text-uppercase text-black-50">
                        {product.category}
                    </h4>
                    <h1 className="display-5">{product.title}</h1>
                    <p className="lead fw-bolder">
                        Rating {product.rating && product.rating.rate} 
                        <i className="fa fa-star"></i>
                    </p>
                    <h3 className="display-6 fw-bold my-4">
                        $ {product.price}
                    </h3>
                    <p className="lead">{product.description}</p>

                    <button className="btn btn-outline-dark px-4 py-2" onClick={()=>send(product)}> 
                        Add to Cart
                    </button>

                </div>
            </>
        )
    }

    return (
        <div>
            <div className="container py-5">
                <div className="row py-4">
                    {loading ? <Loading/> : <ShowProduct/>}
                </div>
            </div>
        </div>
    );
}

export default Productdetails;
