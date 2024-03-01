import React from "react";
import Header from "../../Header/Header";
import Accordion from "../../Accordion";
import BackButton from "../../BackButton";
import './Growth.css';

// Files
// Tests
// Quizzes

const resources = [];

function Growth() {
    return (
        <div className="Growth">
            <Header headerTitle="GROWTH" description="Growth and Finance"/>

            <div className="Resources">
                <BackButton />
                <Accordion data={resources} />
            </div>
        </div>
    );
}

export default Growth;