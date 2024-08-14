import React, { useState, useRef } from 'react';
import Header from './Header/Header';
import BackButton from './BackButton';
import './UploadFile.css';

// Export the file share page
function FileSharePage() {
    const [year, setYear] = useState('');
    const [unitName, setUnitName] = useState('');
    const [quizType, setQuizType] = useState('');
    const [quizNumber, setQuizNumber] = useState('');
    const [showOther, setShowOther] = useState(false);
    const [otherType, setOtherType] = useState('');
    const [droppedFiles, setDroppedFiles] = useState([]);
    const fileInputRef = useRef();

    const date = new Date();
    let currentYear = date.getFullYear();

    // If the current month is less than August, then the current year is the previous year
    if (date.getMonth() < 7) {
        currentYear -= 1;
    }

    const handleDrop = (event) => {
        event.preventDefault();
        const newFiles = Array.from(event.dataTransfer.files);
        setDroppedFiles(prevFiles => [...prevFiles, ...newFiles]);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('year', year);
        formData.append('unitName', unitName);
        formData.append('quizType', quizType);
        formData.append('quizNumber', quizNumber);
        if (showOther) {
            formData.append('otherType', otherType);
        }
        droppedFiles.forEach(file => {
            formData.append('fileInput', file);
        });

        try {
            const response = await fetch('/upload', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json',
                }
            });
            const contentType = response.headers.get('content-type');
            if (contentType && contentType.indexOf('application/json') !== -1) {
                const result = await response.json();
                console.log(result.message);
                alert('Files uploaded successfully.');
            } else {
                const textResult = await response.text();
                console.log(textResult);
                alert('Files uploaded. The server did not respond with JSON data.');
            }
        } catch (error) {
            console.error('Error uploading files:', error);
            alert('Error uploading files. Please try again later.');
        }
    }

    return (
        <div className="File-share">
            <Header headerTitle="Upload Files" description="Complete the form below to upload your files"/>
            <div className="Upload-form">
                <BackButton />
                <form className="Form" onSubmit={handleSubmit}>
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