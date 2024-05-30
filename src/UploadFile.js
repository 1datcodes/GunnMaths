import React from 'react';
import Header from './Header/Header';


// Export the file share page template
function FileSharePage() {
    return (
        <div>
            <Header headerTitle="Upload Files" description="Complete the form below to upload your files"/>
            
            <form className="Form">
                <label htmlFor="unitName">Unit Name:</label>
                <input type="text" id="unitName" name="unitName" /><br /><br />
                
                <label htmlFor="quizType">Quiz or Test or Other:</label>
                <input type="text" id="quizType" name="quizType" /><br /><br />
                
                <label htmlFor="quizNumber">Quiz Number:</label>
                <input type="number" id="quizNumber" name="quizNumber" /><br /><br />
                
                <label htmlFor="year">Year:</label>
                <input type="number" id="year" name="year" /><br /><br />
                
                <div id="fileDropArea" style={{ border: '1px dashed black', padding: '20px', marginBottom: '20px' }}>
                    <p>Drag and drop files here</p>
                </div>
                
                <input type="file" id="fileInput" name="fileInput" multiple /><br /><br />
                
                <button type="button" id="browseButton">Browse Files</button>
            </form>
        </div>
    );
}

export default FileSharePage;