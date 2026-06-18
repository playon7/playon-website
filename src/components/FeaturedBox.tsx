import React from 'react';

interface FeaturedBoxProps {
    title: string;
    url: string;
}

const FeaturedBox: React.FC<FeaturedBoxProps> = ({ title, url }) => {
    return (
        <div className="featured-box">
            <h2>{title}</h2>
            <a href={url} target="_blank" rel="noopener noreferrer">
                Go to Featured Page
            </a>
        </div>
    );
};

export default FeaturedBox;