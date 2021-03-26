const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const express = require('express');

const app = express();
app.use(express.json());

app.post('/upload_files', uploadFiles);
// eslint-disable-next-line no-unused-vars
function uploadFiles(req, res) {
  console.log(req.body);
}
app.listen(8080, () => {
  console.log('Server started...');
});

app.post('/upload_files', upload.array('files'), uploadToServer);

function uploadToServer(req, res) {
  console.log(req.body);
  console.log(req.files);
  res.json({ message: 'Successfully uploaded files' });
}
