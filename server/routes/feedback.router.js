const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req,res) => {
    const feedback = req.body;
    console.log(feedback);
    queryText = ('INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ( $1, $2, $3, $4 );');
    pool.query(queryText, [feedback.feeling, feedback.understanding, feedback.support, feedback.comments])
    .then((response) => {
        res.send(response)
        console.log('looks good to me!');
    })
    .catch((error) => {
        console.log('rut ro scoob', error);
        res.sendStatus(400);
    })
})

module.exports = router;