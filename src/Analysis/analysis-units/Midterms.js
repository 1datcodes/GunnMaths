import React from "react";
import Header from '../../Header/Header';
import Accordion from '../../Accordion';
import BackButton from '../../BackButton';

// Files
// Semester 1
// Semester 2

const resources = [
    {
        url: "/semester1",
        text: "Semester 1",
        options: [
            {
                url: "/semester1/blanked",
                text: "Blanked",
                options: []
            },
            {
                url: "/semester1/raw",
                text: "Raw",
                options: []
            }
        ]
    },
    {
        url: "/semester2",
        text: "Semester 2",
        options: [
            {
                url: "/semester2/blanked",
                text: "Blanked",
                options: []
            },
            {
                url: "/semester2/raw",
                text: "Raw",
                options: []
            }
        ]
    }
];

function Midterms() {
    return (
        <div className="Midterms">
            <Header headerTitle="Midterms" description="Midterm exams"/>
            <div className="Resources">
                <BackButton />
                <Accordion data={resources} />
            </div>
        </div>
    );
}

export default Midterms;