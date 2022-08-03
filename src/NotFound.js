import { Link } from "react-router-dom";

const notFound = () => {
    return ( 
        <div>
            <h3>Sorry</h3>
            <p>Page don't exist</p>
            <Link to="/">Return home</Link>
        </div>
     );
}
 
export default notFound;