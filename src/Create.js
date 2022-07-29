import { toBeInTheDocument } from "@testing-library/jest-dom/dist/matchers";
import { useState } from "react";

const Create = () => {
    const[title,setTitle]=useState('');
    const[body, setBody]=useState('');
    const[author, setAuthor]=useState('s0');

    return ( 
        <div className="create">
            <h2>Add New Blog</h2>
            <form>
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
                <button>Add blog</button>
            </form>
        </div>
        
     );
}

 
export default Create;