import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CountButton({type.setCount,locked}){
     
    const handleClick =(e)=>{
        setCount((prev)=>{

            if(type=="minus"){
                const newCount =prev-1;
                if(newCount < 0){
                    return 0;

                }
                return newCount;
            } else {
                const newCount =prev+1;
                if(newCount >5){
                    return 5;
                }
                return newCount;
            }
        })
        e.currentTarget.blur();
    }

    return(
        
        <button
        className="mx-auto flex items-center justify-center"
        disabled={locked}
        onClick={handleClick}
        >
            {type=="minus" ? (
                 <MinusIcon className="count-btn-icon text-3xl font-bold" />

            ):(
               
                 <PlusIcon className="count-btn-icon text-3xl font-bold" />
            )
            }

        </button>

        
    )
}
