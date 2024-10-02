import React, { useEffect, useState } from 'react';
import './SelectPost.css'; // Create a separate CSS file for styles

const SelectPost = () => {
    const [votedPosts, setVotedPosts] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const items = [
        { post: 'president', imgSrc: 'images/president.jpg' },
        { post: 'vice-president', imgSrc: 'images/vice-president.jpg' },
        { post: 'secretary', imgSrc: 'images/secretary.jpg' },
        { post: 'assistant-secretary', imgSrc: 'images/assistant-secretary.jpg' },
    ];

    useEffect(() => {
        const userId = localStorage.getItem('userId') || Math.random().toString(36).substr(2, 9);
        localStorage.setItem('userId', userId);
        const votes = JSON.parse(localStorage.getItem(`votes_${userId}`)) || [];
        setVotedPosts(votes);
    }, []);

    const itemWidth = 250 + 30; // Width of item + margin
    const totalItems = items.length;

    const handleVote = (post) => {
        if (!votedPosts.includes(post)) {
            const updatedVotes = [...votedPosts, post];
            setVotedPosts(updatedVotes);
            localStorage.setItem(`votes_${localStorage.getItem('userId')}`, JSON.stringify(updatedVotes));
        }
        window.location.href = `voting-page.html?post=${post}`; // Redirect to voting-page.html with the post parameter
    };

    return (
        <div className="select-post">
            <h1>Select a Post to Vote</h1>
            <div className="carousel-container">
                <div className="carousel-btns">
                    <button className="carousel-btn" disabled={currentIndex === 0} onClick={() => setCurrentIndex(currentIndex - 1)}>←</button>
                    <button className="carousel-btn" disabled={currentIndex === totalItems - 1} onClick={() => {
                        if (currentIndex === totalItems - 1) {
                            window.location.href = 'thankyou.html'; // Redirect to thankyou.html
                        } else {
                            setCurrentIndex(currentIndex + 1);
                        }
                    }}>→</button>
                </div>
                <div className="carousel" style={{ transform: `translateX(-${currentIndex * itemWidth}px)` }}>
                    {items.map((item) => (
                        <div
                            key={item.post}
                            className={`carousel-item ${votedPosts.includes(item.post) ? 'voted-item' : ''}`}
                            onClick={() => handleVote(item.post)}
                        >
                            <img src={item.imgSrc} alt={item.post} />
                            <h3>{item.post.replace('-', ' ').replace(/\b\w/g, (char) => char.toUpperCase())}</h3>
                        </div>
                    ))}
                </div>
                <div className="dots">
                    {items.map((_, index) => (
                        <div
                            key={index}
                            className={`dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SelectPost;
