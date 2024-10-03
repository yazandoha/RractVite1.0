import React, { useEffect, useState } from 'react'
import style from'./Product.module.css';
// import style from'./Navbar.module.css';
export default function Product2() {
  const [product,setProduct]=useState([]);
  const getProduct= async()=>{
    const resposne = await fetch("https://fakestoreapi.com/products");
    const data = await resposne.json();
    // console.log(data);
    setProduct(data);

}
  useEffect(()=>{
    getProduct();
  },[])
  
  
  
    return (
    <>
    <div className="row">
        {
            product.map((prod)=>{
                return <div className={`${style.product} col-md-3`}>
                <div className={`${style.item} `}>
                    <h2 className=' fs-5'>{prod.title.split(" ").slice(0, 3).join(" ")}</h2>
                    <img className='' src={prod.image} alt={prod.title} />
                    <h3>{prod.category}</h3>
                    <p>{prod.price}</p>
                </div>
            </div>
            })
        }
    </div>

    
    </>
  )
}
