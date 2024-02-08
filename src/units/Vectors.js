import React from "react";
import Header from "../Header";
import Accordion from "../Accordion";
import BackButton from "../BackButton";
import './Vectors.css';

// Files
// Tests
// Quizzes

const resources = [];

function Vectors() {
    return (
        <div className="Vectors">
            <Header headerTitle="VECTORS" description="Vectors and Parametrics"/>
            <div className="Resources">
                <BackButton />
                <Accordion data={resources} />
            </div>
        </div>
    );
}

export default Vectors;