// This creates a folder that opens and closes when clicked on
// Copilot said it is like an accordion, hence the name

import React, { useState } from "react";
import "./Accordion.css";

function Accordion({ data }) {
    const [activeIndexes, setActiveIndexes] = useState({});

    const handleClick = (index) => {
        setActiveIndexes(prevIndexes => ({
            ...prevIndexes,
            [index]: !prevIndexes[index]
        }));
    };

    return (
        <div className="Accordion">
            {data.map((item, index) => (
                <div key={index}>
                    <button className="Dropdown" onClick={() => handleClick(index)}>
                        {item.text}
                        <span className={`caret ${activeIndexes[index] ? "rotate" : ""}`}>▶</span>
                    </button>
                    {activeIndexes[index] && item.options && item.options.some(option => option.options) && (
                        <div>
                            <Accordion data={item.options} />
                        </div>
                    )}
                    {activeIndexes[index] && item.options && !item.options.some(option => option.options) && (
                        <div className="File">
                            {item.options.map((option, i) => (
                                <a key={i} href={option.url} alt={option.alt} target="_blank" rel="noopener noreferrer">{option.text}</a>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Accordion;