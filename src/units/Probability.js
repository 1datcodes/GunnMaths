import React from "react";
import './Probability.css';
import Header from "../Header";
import Accordion from "../Accordion";

const resources = [];

function Probability() {
    return (
        <div className="Probability">
            <Header headerTitle="Probability" description="Permutations and Combinations"/>
            <div className="Resources">
                <Accordion data={resources} />
            </div>
        </div>
    );
}

export default Probability;