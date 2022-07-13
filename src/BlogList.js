const BlogList = ({propBlogs,title}) => {
    return ( 
        <div className="blog-list">
            <h3>{title}</h3>
            {propBlogs.map((blog)=>(
                <div className="blog-preview" key="{blog.id}">
                    <h3>{blog.title}</h3>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;