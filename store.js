const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = 3000;

// Configure multer storage settings
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
})

// Create multer middleware
const upload = multer({ storage: storage });

// Set up route to handle image uploads
app.post('/upload', upload.single('image'), (req, res) => {
  console.log(req.file);
  res.send('Image uploaded successfully');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
