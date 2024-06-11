import { Link } from "react-router-dom";


const Navbar = () => {
   
    return (
        <div>
            <div className="navbar">
                <div className="navbar-container">
                <div className="logo">Portfolio</div>
                <ul>
                    <li><Link to="Home">Home</Link></li>
                    <li> <Link to ="About">About</Link></li>
                    <li><Link to="Projects">Projects</Link></li>
                    <li><Link to="Contect">Contect</Link></li>
                </ul>
            </div>
            </div>
        </div>
    );
};

export default Navbar;
