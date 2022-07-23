import {useState, useEffect} from "react";

const useFetch = (url)=>{
    const[data,setData]=useState(null);
    const[isPending,setIsPending]=useState(true);
    const[error,setError]=useState(null);
     
    useEffect(()=>{
        setTimeout(()=>{
       fetch(url)
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
        setData(da);
        
       })
       .catch(err=>{
        setError(err.message);
        setIsPending(false);
       })
       },1000) 
    },[url])

    return{data,isPending,error}
}

export default useFetch;
