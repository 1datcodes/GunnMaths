import React, { useState, useRef } from 'react';
import Header from './Header/Header';
import BackButton from './BackButton';
import './UploadFile.css';


// Export the file share page
function FileSharePage() {
    const date = new Date();
    let currentYear = date.getFullYear();

    // If the current month is less than August, then the current year is the previous year
    if (date.getMonth() < 7) {
        currentYear -= 1;
    }

    const [showOther, setShowOther] = useState(false);
    const [droppedFiles, setDroppedFiles] = useState([]);
    const fileInputRef = useRef();

    const handleDrop = (event) => {
        event.preventDefault();
        const files = [];
        if(event.dataTransfer.items) {
            for (let i = 0; i < event.dataTransfer.items.length; i++) {
                if (event.dataTransfer.items[i].kind === 'file') {
                    const file = event.dataTransfer.items[i].getAsFile();
                    files.push(file);
                    console.log("File: ", file.name);
                }
                setDroppedFiles(prevFiles => [...prevFiles, ...files]);
            }
        }
    }

    return (
        <div className="File-share">
            <Header headerTitle="Upload Files" description="Complete the form below to upload your files"/>
            <div className="Upload-form">
                <BackButton />
                <form className="Form" method="POST" encType="multipart/form-data" onSubmit={(event) => {
                    const yearInput = document.getElementById('year');
                    const yearValue = parseInt(yearInput.value, 10);
                    if (yearValue > currentYear || yearValue < currentYear - 50) {
                        event.preventDefault();
                        alert('Year must be within the last 50 years.');
                    }
                }}>
                    <label htmlFor="unitName">Unit Name:</label>
                    {/* <input type="text" id="unitName" name="unitName" /><br /><br /> */}
                    <select id="unitName" name="unitName">
                        <option value="AtPS">AtPS</option>
                        <option value="Probability">Probability</option>
                        <option value="Polar">Polar and 3D</option>
                        <option value="Vector">Vectors and Parametrics</option>
                        <option value="Growth">Growth</option>
                        <option value="Matrices">Matrices</option>
                        <option value="GAtM">GAtM</option>
                        <option value="Limits">Limits</option>
                        <option value="Calculus">Calculus</option>
                        <option value="Midterm">Midterms and Final Reviews</option>
                    </select>
                    
                    <label htmlFor="quizType">Type:</label>
                    <select id="quizType" name="quizType" onChange={(event) => {
                        setShowOther(event.target.value === 'Other');
                    }}>
                        <option value="Quiz">Quiz</option>
                        <option value="Test">Test</option>
                        <option value="Midterm">Midterm Exam</option>
                        <option value="Final">Final Review</option>
                        <option value="Other">Other</option>
                    </select><br /><br />

                    {showOther && (
                        <>
                            <label htmlFor="otherType">Enter a short description</label>
                            <input type="text" id="otherType" name="otherType" /><br /><br />
                        </>
                    )}

                    <label htmlFor="quizNumber">Quiz Number:</label>
                    <input type="number" id="quizNumber" name="quizNumber" /><br /><br />
                    
                    <label htmlFor="year" >Year:</label>
                    <input type="number" id="year" name="year" defaultValue={currentYear} 
                        onKeyDown={(event) => {
                            if (!/[0-9]/.test(event.key) && 
                                event.key !== 'Backspace' && 
                                event.key !== 'Delete' && 
                                event.key !== 'ArrowLeft' && 
                                event.key !== 'ArrowRight' && 
                                event.key !== 'Tab') {
                                    event.preventDefault(); // Disallow non-numeric characters
                            }
                        }
                    }/><br /><br />
                    
                    <div id="fileDropArea" style={{ border: '1px dashed black', padding: '20px', marginBottom: '20px' }}
                        onDragOver={(event) => event.preventDefault()}
                        onDrop={handleDrop}>
                        <p>Drag and drop files here</p>
                    </div>

                    <input type="file" id="fileInput" name="fileInput" multiple ref={fileInputRef} onChange={(event) => {
                        const newFiles = Array.from(event.target.files);
                        setDroppedFiles(prevFiles => [...prevFiles, ...newFiles]);
                    }}/><br /><br />
                
                    {droppedFiles.map((file, index) => (
                        <div key={index} name="fileNames">{file.name}</div>
                    ))}

                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
}

export default FileSharePage;