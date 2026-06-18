import React from 'react';

const ActionFiguresPage: React.FC = () => {
    return (
        <div className="action-figures-page">
            <h1>My Action Figure Collection</h1>
            <p>Welcome to my action figure collection page! Here, I showcase some of my favorite action figures, along with details about each one.</p>
            <div className="figure-gallery">
                <div className="figure-item">
                    <img src="path/to/your/figure1.jpg" alt="Action Figure 1" />
                    <h2>Action Figure 1</h2>
                    <p>Description of Action Figure 1.</p>
                </div>
                <div className="figure-item">
                    <img src="path/to/your/figure2.jpg" alt="Action Figure 2" />
                    <h2>Action Figure 2</h2>
                    <p>Description of Action Figure 2.</p>
                </div>
                {/* Add more figure items as needed */}
            </div>
        </div>
    );
};

export default ActionFiguresPage;