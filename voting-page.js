import React, { useEffect, useState } from 'react';

const VoteForCandidate = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const post = urlParams.get('post');
    const [voteCount, setVoteCount] = useState(0);
    const [candidates, setCandidates] = useState([]);
    const [votedPosts, setVotedPosts] = useState([]);
    
    const candidatesData = {
        'president': ['Candidate A', 'Candidate B', 'Candidate C'],
        'vice-president': ['Candidate D', 'Candidate E', 'Candidate F'],
        'secretary': ['Candidate G', 'Candidate H', 'Candidate I'],
        'assistant-secretary': ['Candidate J', 'Candidate K', 'Candidate L']
    };

    useEffect(() => {
        if (candidatesData[post]) {
            setCandidates(candidatesData[post]);
        }
        
        const storedVotedPosts = JSON.parse(localStorage.getItem('votedPosts')) || [];
        setVotedPosts(storedVotedPosts);
    }, [post]);

    const castVote = (candidate) => {
        setVoteCount(prevCount => prevCount + 1);
        const button = document.querySelector(`button[data-candidate='${candidate}']`);
        button.classList.add('voted');
        button.innerHTML = "Your vote is final; no rewinds in this digital realm😁";
        button.disabled = true;

        if (!votedPosts.includes(post)) {
            const updatedVotedPosts = [...votedPosts, post];
            setVotedPosts(updatedVotedPosts);
            localStorage.setItem('votedPosts', JSON.stringify(updatedVotedPosts));
        }

        setTimeout(() => {
            if (voteCount !== candidates.length - 1) {
                window.location.href = '/SelectPost.js'; // Redirect to SelectPost.js
            } else {
                window.location.href = '/thankyou.html'; // Or to your thank you page
            }
        }, 3000); // 3 seconds delay before redirect
    };

    return (
        <div className="container" style={styles.container}>
            <h2 style={styles.title}>Vote for {post.replace('-', ' ').toUpperCase()}</h2>
            <div id="candidate-buttons">
                {candidates.map(candidate => (
                    <button
                        key={candidate}
                        data-candidate={candidate}
                        style={styles.button}
                        onClick={() => castVote(candidate)}
                    >
                        {candidate}
                    </button>
                ))}
            </div>
        </div>
    );
};

const styles = {
    container: {
        fontFamily: 'Algerian, sans-serif',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
        flexDirection: 'column',
        margin: 0,
    },
    title: {
        marginBottom: '20px',
        fontSize: '24px',
    },
    button: {
        margin: '10px',
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    }
};

export default VoteForCandidate;
