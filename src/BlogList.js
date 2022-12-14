import { Link } from "react-router-dom";

const BlogList = ({propBlogs ,title}) => {
    return ( 
        <div className="blog-list">
            <h3>{title}</h3>
            {propBlogs.map((b)=>(
                <div className="blog-preview" key={b.id}>
                    <Link to= {`/blogs/${b.id}`}>
                        <h3>{b.title}</h3>
                        <p>Written by {b.author}</p>
                    </Link>
                    
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;