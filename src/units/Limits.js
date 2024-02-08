import React from "react";
import Header from "../Header";
import Accordion from "../Accordion";
import BackButton from "../BackButton";
import "./Limits.css";

// Files
// Tests
// Quizzes

const resources = [];

function Limits() {
    return (
        <div className="Limits">
            <Header headerTitle="LIMITS" description="Limits (Buchanan Book)"/>

            <div className="Resources">
                <BackButton />
                <Accordion data={resources} />
            </div>
        </div>
    );
}

export default Limits;