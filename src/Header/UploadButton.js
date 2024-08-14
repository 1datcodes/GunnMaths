import React from "react";
import './HeaderButtons.css';

function Upload() {
    return (
        <div className="uploadButton">
            <a className="uploadButtonImg" href="https://forms.gle/2MymH9jiCXaag2947" target="_blank" rel="noreferrer">
                <svg className="h-8 w-8 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="black">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/>
                </svg>
            </a>
        </div>
    );
}

export default Upload;