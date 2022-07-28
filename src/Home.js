import useFetch from "./useFetch";
import BlogList from "./BlogList";


const Home = () => {
    const{isPending,error,data:blogs}=useFetch('http://localhost:8000/blogs');   
    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div> loading...</div>}
            {blogs && <BlogList propBlogs={blogs} title="All blogs" />}
        </div>
     );
}
 
export default Home;