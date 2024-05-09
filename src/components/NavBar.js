import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
    return(
        <div className = "buttonContainer">
            <Link to='/' className = "item">Home</Link>
            <Link to='/projects' className = "item">Projects</Link>
            <Link to='/experience' className = "item">Experience</Link>
            <Link to='/about' className = "item">About</Link>
        </div>
    );
}

export default NavBar;