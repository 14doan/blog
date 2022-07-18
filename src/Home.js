import { useState, useEffect } from "react";
import BlogList from "./BlogList";


const Home = () => {
    const[blogs,setBlogs]=useState(null);
     
    const deleteClick=(id)=>{
        const newBlogs=blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }
   
    useEffect(()=>{
       fetch('http://localhost:8000/blogs')
       .then((response => {
        return response.json();
       }))
       .then((da)=>{
        setBlogs(da);
       }
       ) 
    },[])
    return ( 
        <div className="home">
            {blogs && <BlogList propBlogs={blogs} title="All blogs" del={deleteClick}/>}
        </div>
     );
}
 
export default Home;