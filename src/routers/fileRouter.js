const express = require('express');

const router = express.Router();

router.post('/upload-file', (req, res) => {
  res.send("user upload file")
});


router.get('/files-lists', (req, res) => {
  res.send("get all files")
});

router.get('/file-by-id', (req, res) => {
  res.send("get file")
});

router.update('/update-file', (req, res) => {
  res.send("update file")
});


router.delete('/delete', (req, res) => {
  res.send("delete  file")
});


router.delete('/delete-all', (req, res) => {
  res.send("delete all files")
});


module.exports = router;