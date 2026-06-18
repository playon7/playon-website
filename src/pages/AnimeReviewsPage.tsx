import React from 'react';

const AnimeReviewsPage: React.FC = () => {
    return (
        <div>
            <h1>Anime Reviews</h1>
            <p>Welcome to my Anime Reviews page! Here, I share my thoughts and reviews on various anime series that I've watched.</p>
            <section>
                <h2>My Top Anime</h2>
                <ul>
                    <li>
                        <h3>Attack on Titan</h3>
                        <p>A thrilling story about humanity's fight against giant humanoid creatures.</p>
                    </li>
                    <li>
                        <h3>My Hero Academia</h3>
                        <p>A tale of aspiring heroes in a world where superpowers are the norm.</p>
                    </li>
                    <li>
                        <h3>Death Note</h3>
                        <p>A psychological thriller about a high school student who discovers a notebook that allows him to kill anyone by writing their name in it.</p>
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default AnimeReviewsPage;