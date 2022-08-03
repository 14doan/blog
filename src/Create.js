import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const[title,setTitle]=useState('');
    const[body, setBody]=useState('');
    const[author, setAuthor]=useState('s0');
    const[isPending,setIsPending]=useState(false);
    const history=useHistory();

    const handleSubmit=(e)=>{
        e.preventDefault();
        const blog={title,body,author};

        setIsPending(true);
        
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log("new blog added")
            setIsPending(false);
            history.push('/');
            });
    }

    return ( 
        <div className="create">
            <h2>Add New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                />
    
                <label>Body</label>
               <textarea
                    required
                    value={body}
                    onChange={(e)=>setBody(e.target.value)}
               />

                <label>Author</label>
                <select
                required
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}
                >
                    <option value="s0">S0</option>
                    <option value="s1">s1</option>
                </select>
                {!isPending && <button>Add blog</button>}
                {isPending && <button disabled >Adding...</button>}
            </form>
        </div>
        
     );
}

 
export default Create;