import React from 'react';
import Header from '../Header';
import Accordion from '../Accordion';
import BackButton from '../BackButton';
import './GAtM.css';

// Files
// Tests
// Quizzes

const resources = [];

function GAtM() {
    return (
        <div className="GAtM">
            <Header headerTitle="GAtM" description="Geometric Approach to Matrices"/>

            <div className="Resources">
                <BackButton />
                <Accordion data={resources} />
            </div>
        </div>
    );
}

export default GAtM;
