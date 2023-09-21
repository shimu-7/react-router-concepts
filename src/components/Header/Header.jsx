import { Link, NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav>
                <h3>NavBar</h3>
                <Link to="/">Home</Link>
                <NavLink to="/about">About</NavLink>
                <Link to="/contact">Contact</Link>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/users">Users</NavLink>
                {/* <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a> */}
            </nav>
        </div>
    );
};

export default Header;