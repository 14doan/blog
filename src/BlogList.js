const BlogList = ({propBlogs ,title, del}) => {
    return ( 
        <div className="blog-list">
            <h3>{title}</h3>
            {propBlogs.map((b)=>(
                <div className="blog-preview" key={b.id}>
                    <h3>{b.title}</h3>
                    <p>Written by {b.author}</p>
                    <button onClick={()=>del(b.id)}>Delete</button>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;