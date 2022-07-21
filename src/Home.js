import { useState, useEffect } from "react";
import BlogList from "./BlogList";


const Home = () => {
    const[blogs,setBlogs]=useState(null);
    const[isPending,setIsPending]=useState(true);
    const[error,setError]=useState(null);
     
   
    useEffect(()=>{
        setTimeout(()=>{
       fetch('http://localhost:8000/blogs')
       .then((response => {
        if(!response.ok){
          throw Error ("computer says no");
        }
        console.log(response);
        return response.json();
       }))
       .then((da)=>{
        console.log(da);
        setError(null);
        setIsPending(false);
        setBlogs(da);
        
       })
       .catch(err=>{
        setError(err.message);
        setIsPending(false);
       })
       },1000) 
    },[])
    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div> loading...</div>}
            {blogs && <BlogList propBlogs={blogs} title="All blogs" />}
        </div>
     );
}
 
export default Home;