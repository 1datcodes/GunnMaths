import React, { useState } from 'react';
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
    
    return (
        <div className="File-share">
            <Header headerTitle="Upload Files" description="Complete the form below to upload your files"/>
            <div className="Upload-form">
                <BackButton />
                <form className="Form" onSubmit={(event) => {
                    const yearInput = document.getElementById('year');
                    const yearValue = parseInt(yearInput.value, 10);
                    if (yearValue > currentYear || yearValue < currentYear - 50) {
                        event.preventDefault();
                        alert('Year must be within the last 50 years.');
                    }
                }}>
                    <label htmlFor="unitName">Unit Name:</label>
                    <input type="text" id="unitName" name="unitName" /><br /><br />
                    
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
                    
                    <div id="fileDropArea" style={{ border: '1px dashed black', padding: '20px', marginBottom: '20px' }}>
                        <p>Drag and drop files here</p>
                    </div>
                    
                    <input type="file" id="fileInput" name="fileInput" multiple /><br /><br />
                
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
}

export default FileSharePage;