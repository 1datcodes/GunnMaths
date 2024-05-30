import React from "react";
import './HeaderButtons.css';

function Upload() {
    return (
        <div className="uploadButton">
            <button onClick={() => window.location.href="/upload"}>
                <p>Text</p>
            </button>
        </div>
    );
}

export default Upload;