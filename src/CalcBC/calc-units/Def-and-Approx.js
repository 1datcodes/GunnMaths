import React from 'react';
import Header from '../../Header/Header';
import Accordion from '../../Accordion';
import BackButton from '../../BackButton';

const resources = []

function DefAndApprox() {
    return (
        <div className="Content">
            <Header headerTitle="CALCULUS" description="Calc BC"/>
            <BackButton />
            <Accordion resources={resources}/>
        </div>
    );
}

export default DefAndApprox;