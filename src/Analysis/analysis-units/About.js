import React from "react";
import Header from '../../Header/Header';
import Accordion from '../../Accordion';
import BackButton from '../../BackButton';

const resources = [];

function About() {
    return (
        <div className="About">
            <Header headerTitle="About" description="About this website"/>
            <div className="Resources">
                <BackButton />
                <Accordion data={resources} />
            </div>
        </div>
    );
}

export default About;