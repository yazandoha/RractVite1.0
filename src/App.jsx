import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar'
import Producr from './Component/Producr';

function App() {

  // let count2 = 0;
  const [count2,setCount2] = useState(0);
  const [count, setCount] = useState(0);
  const [items,setItem]=useState(['s21','s32','s22']);
  const [user,setUSer] = useState({name:"yazan",age:22,email:"yazandoha@gmail.com"});

  const [login,setLogin] = useState(false);


  const [products,setProduct] = useState([
    {name:"iphone",disc:"this is the product iphone",price:319.99,offer:"get 10% if you buy new"},
    {name:"samsubg",disc:"this is the product samsung",price:519.99,offer:"get 20% if you buy new"},
    {name:"HP",disc:"this is the product HP",price:999.99,offer:"get 10% if you buy new"}
  ]);
  const addCount=()=>{
    
    setCount2(count2+1);
    // count2++;
    // console.log(count2);
  }
  return (
  <>
    <Navbar/>

    {
      products.map((product,index)=>{
        return <Producr productDetails={product}/> 
      })
    }
     
    {/* <Producr productDetails={products[1]}/>  
    <Producr productDetails={products[2]}/>   */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => addCount()}>
          add {count2}
        </button>
      </div>


      <ul>
      {
        // when i need to write code JS in the JSX file in the return function i must use {} and code Js in the pracits
        items.map(item =>{
         return <li>{item}</li>
        })
      }
      </ul>

      <div>
        <h1>name :{user.name}</h1>
        <h2>age :{user.age}</h2>
      </div>

      <div className="d">
        <h1>products</h1>
          {
            products.map(product=>{
              return <div className="">
                <h2>{product.name}</h2>
                <p>{product.disc}</p>
              </div>
            })
          }
      </div>

    </>
  )
}

export default App
