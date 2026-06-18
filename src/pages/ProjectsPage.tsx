import React from 'react';
import './ProjectsPage.css';

const ProjectsPage: React.FC = () => {
    return (
        <div className="projects-page">
            <h1>My Personal Projects</h1>
            <p>Welcome to my projects page! Here you can find various personal projects I've worked on, including interactive applications and showcases of my skills.</p>
            
            <h2>Featured Project: AI Drawing Guessing Game</h2>
            <iframe 
                src="https://your-drawing-game-url.com" 
                title="AI Drawing Guessing Game" 
                width="600" 
                height="400" 
                style={{ border: 'none' }}
            ></iframe>
            
            <h2>Other Projects</h2>
            <ul>
                <li>
                    <a href="https://your-wordle-clone-url.com" target="_blank" rel="noopener noreferrer">Wordle Clone</a>
                </li>
                <li>
                    <a href="https://your-other-project-url.com" target="_blank" rel="noopener noreferrer">Other Project Showcase</a>
                </li>
                {/* Add more projects as needed */}
            </ul>
        </div>
    );
};

export default ProjectsPage;