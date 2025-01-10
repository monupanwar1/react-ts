import { useState } from "react"

const TodoList = () => {
    const[todos,setTodos]=useState([]);
    const[input,setInput]=useState("");

    const handleSubmit=()=>{
        if(input.trim()){
            setTodos([...todos,input])
            setInput("");
        }
    }

    const handleChange =(e)=>{
        setInput(e.target.value);
    }
  return (
    <div>Todo list
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={input}
            onChange={handleChange}
            placeholder="addd  a new item"
             />
             <button className="px-4 py-2 rounded-md bg-blue-500">Add now</button>
        </form>
        <ul>
            {todos.map((todo,index)=>(
                <li key={index}>{todo}</li>

            ))}
        </ul>
    </div>

  )
}
export default TodoList