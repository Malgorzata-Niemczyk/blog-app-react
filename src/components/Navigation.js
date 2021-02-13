import { FaPaw } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return ( 
        <div className="navbar">
            <h1><FaPaw /> The Pets Health Blog</h1>
            <div className="navbar__links">
                <Link to="/">Home</Link>
                <Link to="/create-blog" className="navbar__links__new__blog">New Blog</Link>
            </div>
        </div>
     );
}
 
export default Navigation;