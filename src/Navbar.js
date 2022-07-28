import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Ways Of Survival</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Write Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar; 