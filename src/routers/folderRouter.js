const express = require('express');

const router = express.Router();

router.post('/add-dir', (req, res) => {
  res.send("user create new directory")
});


router.get('/all-dirs', (req, res) => {
  res.send("get all directories")
});

router.get('/dir-by-id', (req, res) => {
  res.send("get select directory")
});

router.update('/rename-dir', (req, res) => {
  res.send("update directory name")
});


router.delete('/delete', (req, res) => {
  res.send("remove directory")
});


router.delete('/remove', (req, res) => {
  res.send("delete empty")
});


module.exports = router;