const express = require('express');
const Bitcoin = require('../models/Bitcoin')
const router = express.Router();

router.get('/', (req,res) => {
    res.send("We are now on bitcoin")
});

router.get('/live', (req,res) => {
    res.send("We are now on live bitcoin")
});

router.post('/', (req,res) => {
    console.log(req.body);
});



module.exports = router;