const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
	cb(null, 'uploads/');
  },
  filename: function(req, file, cb) {
	cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// Endpoint for file upload
app.post('/upload', upload.array('fileInput', 12), (req, res) => {
  console.log('Files uploaded:', req.files);
  res.send({ message: 'Files uploaded successfully.' });
});

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});