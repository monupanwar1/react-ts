import { useState } from "react"

const ShoppingList = () => {
    const[items,setItems]=useState([]);
    const[name,setName]=useState("");
    const[quantity,setQuatity]=useState("");


    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!name || !quantity) return;

        const newItems = {
            name,
            quantity:parseInt(quantity),
        }
        setItems((prev)=>[...prev,newItems]);
        setName("");
        setQuatity("");
    }
  return (
    <div>
        <h1>shopping list</h1>
        <form onSubmit={handleSubmit}>
            <input type="text"
            placeholder="items-name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
             />
            <input type="number"
            placeholder="items qunantity"
            value={quantity}
            onChange={(e)=>setQuatity(e.target.value)}
             />
             <button type="submit">Add items</button>

        </form>
        <ul>
            {items.map((items,index)=>(
                <li key={index}>
                    {items.name}-Quantity:{items.quantity}
                </li>

            ))}
        </ul>
    </div>
  )
}
export default ShoppingList