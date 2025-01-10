import { useState } from "react"

const InputCopy = () => {
    const [inputValue,setInputValue]=useState("");
    const [copied,setCopied]=useState(false);

    const handleCopy=()=>{
        navigator.clipboard.writeText(inputValue).then(()=>{
            setCopied(true);
            setTimeout(()=>setCopied(false),3000)
        })
    }


  return (
    <div>InputCopy
        <input
         type="text" 
         value={inputValue}
         onChange={(e)=>setInputValue(e.target.value)}
         className="border-2"
         />
       <button onClick={handleCopy}>
        Copy</button>
    </div>
  )
}
export default InputCopy