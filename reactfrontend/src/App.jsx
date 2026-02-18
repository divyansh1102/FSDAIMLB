import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[data , setData]= useState([])
  const [loader,setLoader]=useState(false)
async function getData(){
  try{
    setLoader(true)
  const response= await fetch('http://localhost:4007/data');
  const jsondata= await response.json();
  setData(jsondata.msg);
  }catch(e){
    console.log(e)
  }
  finally{
       setLoader(false)
  }

  // alert("hi....initi");
}
function cartData(dataitem){
  alert(dataitem.title)
}

  return (
    <>
      <h2>welcome to react</h2>
      {
        data.map((ele)=>(
          <div style= {{border:'2px solid brige'}}>
            <img src={ele.image} height={200} width={200}></img>
            <h2>{ele.id}:{ele.title}</h2>
            <h3>{ele.title}</h3>
            <button onClick={()=>cartData(ele)}>Add to cart</button>
          </div>
        ))
      }
      {loader?(<h2>datat is loading</h2>):("")}
      {/* {JSON.stringify(data)} */}
      <button onClick ={getData}>fetchdata</button>
    </>
  )
}

export default App
