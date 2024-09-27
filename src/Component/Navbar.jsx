// import React from 'react'
import { useState } from 'react';
import style from'./Navbar.module.css';
export default function Navbar() {
    const [login,setLogin] = useState(false);
  return (
    <>
        <div className={`${style.bg} ${login?style.ss:''}`}>Navbar</div>
        <p className={`bg-danger`}>act</p>

            
    </>

  )
}
