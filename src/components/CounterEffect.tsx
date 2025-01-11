import { useEffect, useState } from "react"

const CounterEffect = () => {
    const[count,setCount]=useState(0);

      useEffect(()=>{
        // document.title =`cout:${count}`
      },[count]);

      const handldeClick = ()=>{
        setCount((prev)=>prev+1); 
      }

  return (
    <div>
        <h1>Countereffect</h1>
        <button onClick={handldeClick} className="bg-blue-500 rouded-md text-white px-4 py-2">Increment</button>
        <h1>{count}</h1>
    </div>
  )
}
export default CounterEffect