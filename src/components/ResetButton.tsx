import { ResetIcon } from "@radix-ui/react-icons";

export default function ResetButton({setCount}){
    return(
        <button>
            <ResetIcon className="text-3xl md:text-4xl text-gray-400"/>
        </button>
    )
}