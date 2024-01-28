import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div>
            <h1>Gunn Math Resources</h1>
            <Link to="/analysis">Analysis</Link>
        </div>
    );
}

export default HomePage;