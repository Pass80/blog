import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="home">
            <div className="image-container"></div>
            <div className="welcome-section">
                <h1>Welcome to my simple Blog</h1>
                <Link to="/blogs">
                    <button>Go to articles</button>
                </Link>
            </div>
        </div>
    );
};

export default HomePage;
