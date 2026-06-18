import React from 'react';

const TierListsPage: React.FC = () => {
    return (
        <div className="tier-lists-page">
            <h1>My Tier Lists</h1>
            <p>Welcome to my tier lists! Here, you can find various tier lists that I've created based on my interests, including games, anime, and more.</p>
            <ul>
                <li>
                    <h2>Anime Tier List</h2>
                    <p>A tier list ranking my favorite anime series.</p>
                </li>
                <li>
                    <h2>Video Games Tier List</h2>
                    <p>A tier list showcasing my favorite video games.</p>
                </li>
                <li>
                    <h2>Action Figures Tier List</h2>
                    <p>A tier list of my action figure collection.</p>
                </li>
                {/* Add more tier lists as needed */}
            </ul>
        </div>
    );
};

export default TierListsPage;