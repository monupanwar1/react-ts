import { useState } from "react"


export function Counter(){
    const [count,setCount]=useState(0);

    const increment =()=>{
        setCount((count)=>count+1);
    }
    const decrement =()=>{
        setCount((count)=>count?count-1:0)
    }

    return(
        <div className="bg-gray-500 rounded-md p-4 w-60 h-80 gap-2">
            <h1 className="text-gray-900 text-center text-2xl ">{count}</h1>
            <button className="bg-blue-500 rounded-md text-center px-4 py-2" onClick={increment}>Icrement</button>
            <button className="bg-blue-500 rounded-md text-center px-4 py-2" onClick={decrement}>Decrement</button>
        </div>
    )
}