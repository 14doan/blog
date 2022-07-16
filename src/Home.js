import { useState, useEffect } from "react";
import BlogList from "./BlogList";


const Home = () => {
    const[blogs,setBlogs]=useState([
        {title: "Dream Big",
        content:"What is a ‘big’ dream? Many are brainwashed into thinking that big means being a zillionaire with 10 houses and private beach. ",
        author: "s0", id:1},
        {title: "Types Of Riches",
        content:"What does it mean to be rich? It means you can afford. The richer you are, the more you can afford. This holds true across all areas of life.",
        author: "s1", id:2},
        {title: "See Your Haters",
        content:"You're morbidly mistaken, if you think you don't have haters. A hater is just someone who screams they don't like you",
        author: "s0", id:3}
    ]);

    const[name,setName]=useState('Jay');
    
    const deleteClick=(id)=>{
        const newBlogs=blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }
   
    useEffect(()=>{
        console.log("I render at the start and when the state of my dependencies changes")
        console.log(name);
    },[name])
    return ( 
        <div className="home">
            <BlogList propBlogs={blogs} title="All blogs" del={deleteClick}/>
            <button onClick={()=>setName('Dat')}>change name</button>
        </div>
     );
}
 
export default Home;