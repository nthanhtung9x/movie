import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <nav className="nav justify-content-center bg-light">
                <NavLink className="nav-link" activeClassName="active" to="/home">Home</NavLink>
                <NavLink className="nav-link" activeClassName="active" to="/login">Login</NavLink>
                <NavLink className="nav-link" activeClassName="active" to="/register">Register</NavLink>
            </nav>
        </div>
    )
}

export default Header;

