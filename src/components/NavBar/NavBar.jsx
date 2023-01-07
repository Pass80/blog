import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <h2>My Life</h2>
            <ul>
                <Link className="link" to="/">
                    <li>Home</li>
                </Link>
                <Link className="link" to="/blogs">
                    <li>Blog</li>
                </Link>
            </ul>
        </nav>
    );
};

export default NavBar;
