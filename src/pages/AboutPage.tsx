import React from 'react';

const AboutPage: React.FC = () => {
    return (
        <div className="about-page">
            <h1>About Me</h1>
            <p>
                Hello! I'm [Your Name], a passionate [Your Profession/Field] with a love for [Your Interests/Hobbies]. 
                I enjoy creating projects that combine my skills in [Skill 1], [Skill 2], and [Skill 3]. 
                In my free time, I love to [Hobby 1], [Hobby 2], and [Hobby 3].
            </p>
            <h2>Hobbies and Interests</h2>
            <ul>
                <li>Hobby 1</li>
                <li>Hobby 2</li>
                <li>Hobby 3</li>
                <li>Hobby 4</li>
            </ul>
            <h2>Fun Facts</h2>
            <p>
                Here are some fun facts about me:
            </p>
            <ul>
                <li>Fact 1</li>
                <li>Fact 2</li>
                <li>Fact 3</li>
            </ul>
        </div>
    );
};

export default AboutPage;