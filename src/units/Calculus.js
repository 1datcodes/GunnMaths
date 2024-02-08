import React from 'react';
import Header from '../Header';
import Accordion from '../Accordion';
import BackButton from '../BackButton';
import './Calculus.css';

// Files
// Tests
// Quizzes

const resources = [];

function Calculus() {
    return (
        <div className="Calculus">
            <Header headerTitle="CALCULUS" description="Calculus Book Chapters 1~3"/>

            <div className="Resources">
                <BackButton />
                <Accordion data={resources} />
            </div>
        </div>
    );
}

export default Calculus;