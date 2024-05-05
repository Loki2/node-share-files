const express = require('express');

const router = express.Router();

router.post('/login', (req, res) => {
  res.send("user login")
});


router.post('/register', (req, res) => {
  res.send("user register")
});



module.exports = router;