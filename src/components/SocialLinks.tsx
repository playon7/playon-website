import React from 'react';

const SocialLinks: React.FC = () => {
    return (
        <div className="social-links">
            <h2>Connect with me</h2>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                </li>
                <li>
                    <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                </li>
                {/* Add more social links as needed */}
            </ul>
        </div>
    );
};

export default SocialLinks;