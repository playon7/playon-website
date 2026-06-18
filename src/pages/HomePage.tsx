import React from 'react';
import FeaturedBox from '../components/FeaturedBox';
import SocialLinks from '../components/SocialLinks';
import './HomePage.css';

const HomePage: React.FC = () => {
    return (
        <div className="home-page">
            <header>
                <h1>Welcome to My Portfolio</h1>
                <p>
                    I am a passionate developer with a love for creating engaging and interactive web applications. 
                    Explore my work, hobbies, and interests through the links below!
                </p>
            </header>
            <SocialLinks />
            <FeaturedBox title="Featured Project" url="/projects" />
        </div>
    );
};

export default HomePage;