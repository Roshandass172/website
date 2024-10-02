import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VoteForCandidate from './VoteForCandidate';
import SelectPost from './SelectPost'; // Import your SelectPost component
import ThankYou from './ThankYou'; // Create a ThankYou component

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<SelectPost />} />
                    <Route path="/vote" element={<VoteForCandidate />} />
                    <Route path="/thankyou" element={<ThankYou />} />
                </Routes>
            </div>
        </Router>z
    );
};

export default App;