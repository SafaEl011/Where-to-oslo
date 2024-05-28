import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


const BottomNavbar = () => {
    return (
        <nav className="navbar fixed-bottom navbar-light bg-light">
            <div className="container-fluid d-flex justify-content-around">
                <Link to="/categories" className="btn btn-primary">Category</Link>
                <Link to="/top5" className="btn btn-primary">Top 5</Link>
            </div>
        </nav>
    )
}

export default BottomNavbar;