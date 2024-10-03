import React, { useEffect, useState } from 'react'

export default function Producr(props){
    // const [products,setProducts]=useState([]);

    // async function getProduct(){
    //     const response = await fetch("https://fakestoreapi.com/products");
    //     const data = await response.json();
    //     console.log("aa");
    //     setProducts(data);
    // }
    const {name,disc,price,offer} = props.productDetails;
    // useEffect(()=>{
    //     getProduct();
    // },[]) 
    // [] is dependacy array

  return (
    <>
        <div className="col-md-4">
            <div className="card" style={{width: '18rem'}}>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{disc}</p>
                    <span>price : {price}$</span>
                </div>  
                <div className="card-footer">
                    <p>special offer : {offer}</p>
                </div>
            </div>
        </div>
    </>
  )
}
