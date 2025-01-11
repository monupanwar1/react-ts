import { useEffect, useState } from "react"

const FetchDataEffect = () => {
    const [posts,setPosts]=useState([]);

    useEffect(()=>{
        const fetchData = async()=>{
            const response = await fetch( "https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            setPosts(data);
        };
        fetchData();
    },[]);

  return (
    <div >
        <h1 className="bg-blue-500 text-gray-900 text-center">FetchDataEffect</h1>
        {posts.length >0 ? <h2>{posts[0].title}</h2> :<p>loading...</p>}
        
    </div>
  )
}
export default FetchDataEffect