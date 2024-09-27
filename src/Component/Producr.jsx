import React from 'react'

export default function Producr(props){
    const {name,disc,price,offer} = props.productDetails;
    // console.log(name);
  return (
    <>
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

    </>
  )
}
