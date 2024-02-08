import React from "react";
import Header from "../Header";
import Accordion from "../Accordion";
import BackButton from "../BackButton";
import './Polar.css';

// Files
// Tests
// Quizzes

const resources = [];

function Polar() {
    return (
        <div className="polar-and-3d">
            <Header headerTitle="POLAR AND 3D" description="Polar and 3D Graphing"/>
            <div className="Resources">
                <BackButton />
                <Accordion data={resources} />
            </div>
        </div>
    );
}

export default Polar;