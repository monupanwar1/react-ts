export default function Title({locked}){
    return(
        <h1 className="font font-bold text-4xl md:text-5xl text-center">
            {locked ?(

                 <span className="font-bold text-2xl md:text-3xl text-center">
                  Limit! Buy <b>Pro</b> for &gt;5
                  </span>

            ):(
                "Fancy Counter"
            )}
        </h1>
    )

}