import React from "react";
import './HeaderButtons.css';

function Upload() {
    return (
        <div className="uploadButton">
            <button onClick={() => console.log("Clicked")}>
                <p>Text</p>
            </button>
        </div>
    );
}

export default Upload;