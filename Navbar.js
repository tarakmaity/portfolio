import { Link } from "react-router-dom";
import "../nevelement/navbar.css"

const Navbar = () => {
   
    return (
        <div>
             
            <div className="navbar">
            <div className="logo">Tarak's PF</div>
                <ul>
                    <li><Link to="Home">Home</Link></li>
                    <li><Link to ="About">About</Link></li>
                    <li><Link to="Projects">Projects</Link></li>
                    <li><Link to="Contect">Contect</Link></li>
                </ul>
            </div>
            </div>
        
    );
};

export default Navbar;
