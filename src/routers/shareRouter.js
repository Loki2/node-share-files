const express = require('express');

const router = express.Router();

router.post('/send-file', (req, res) => {
  res.send("user share file from directory")
});


router.post('/remove-file', (req, res) => {
  res.send("user remove file for sharing")
});



module.exports = router;