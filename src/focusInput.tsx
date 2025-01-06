import { useRef } from "react"

export default function FocusInput(){

    const inputRef = useRef<HTMLInputElement>(null);

    const handleFocus =()=>{
        inputRef.current?.focus();

    }

    return(
        <div>
            <input
             type="text" 
             ref={inputRef}
             placeholder="enter the text "
             />
             <button onClick={handleFocus} className="bg-blue-500 rounded-500 px-4 py-2 ">click to focus</button>
        </div>
    )
}