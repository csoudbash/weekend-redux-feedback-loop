const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req,res) => {
    const feedback = req.body;
    console.log(feedback);
    res.sendStatus(200);
})

module.exports = router;