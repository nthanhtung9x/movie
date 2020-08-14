import React from 'react';
import './Header.scss';
const Header = () => {
    return (
        <div>
            <nav className="nav justify-content-center">
                <a className="nav-link active" href="#">Active link</a>
                <a className="nav-link" href="#">Link</a>
                <a className="nav-link" href="#">Disabled link</a>
            </nav>
        </div>
    )
}

export default Header;

