import { useState } from "react";


const Home = () => {
    const handleClick= () => {
        console.log ("hey bitch");
    }
    const handleClickAgain= (name)=>{
        console.log ("sup " + name);
    }//
    const [age,setAge]=useState;
    return ( 
        <div className="home">
            <h1>Homepage</h1>
            <button onClick={handleClick}>click me</button>
            <button onClick={()=>handleClickAgain("dat")}>click me again</button>
            <button onClick={()=>setAge(age+1)}>click till you reach your age</button>
        </div>
     );
}
 
export default Home;