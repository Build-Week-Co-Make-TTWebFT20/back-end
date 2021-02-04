const router = require('express').Router();
const Vote = require('./vote-model');
const validateToken = require('../auth/restricted-middleware');

router.post('/:id', validateToken, (req, res) => {
    const {id} = req.params;
    Vote.upVote(id, req.decodedJwt.username, req.body.direction)
        .then(result => {
            res.status(201).json(result)
        })
        .catch(err => {
            res.status(500).json(err.message)
        })
})

module.exports = router;