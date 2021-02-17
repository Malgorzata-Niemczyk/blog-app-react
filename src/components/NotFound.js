import { Link } from "react-router-dom";
import errorImage from "../assets/img/error.jpg"

const NotFound = () => {
    return ( 
        <div className="not__found">
            <img src={errorImage} alt="404 error"/>
            <h2>Oops!</h2>
            <p>Page Not Found</p>
            <Link to="/">Go back to the homepage...</Link>
        </div>
     );
}
 
export default NotFound;