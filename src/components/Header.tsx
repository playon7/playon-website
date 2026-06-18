import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Assuming you have a CSS file for styling the header

const Header: React.FC = () => {
    return (
        <header className="header">
            <h1 className="header-title">My Portfolio</h1>
            <nav className="header-nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/action-figures">Action Figures</Link></li>
                    <li><Link to="/anime-reviews">Anime Reviews</Link></li>
                    <li><Link to="/games-reviews">Games Reviews</Link></li>
                    <li><Link to="/tier-lists">Tier Lists</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;