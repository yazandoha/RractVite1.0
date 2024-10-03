import React, { useEffect, useState } from 'react'
export default function Count() {

    const [count,setCount]=useState(0);
    const [name,setName] = useState("yazan");

    const changeName = ()=>{
      setName("mohanad");
      //chName(); 
      // console.log("name changing");
    }
    const increment =()=>{
        setCount(count+1)
    }
    const decrement = ()=>{
        setCount(count-1)
    }
    const incdec =()=>{
      console.log("Change Count");
    }
    const chName =()=>{
      console.log("Change Name");
    }


    useEffect(()=>{
      incdec();
    },[count])
    useEffect(()=>{
      console.log("print more");
    })
    useEffect(()=>{
      console.log("print1");
    },[])
    useEffect(()=>{
      chName();
    },[name])
    
  return (
    <div>
        <p>count {count}</p>
        <p>name {name}</p>
        <button onClick={changeName}>change name</button>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
    </div>
  )
}
