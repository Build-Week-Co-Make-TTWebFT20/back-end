const router = require('express').Router();
const Post = require('./post-model');
const checkForm = require('./post-middleware');
const validateToken = require('../auth/restricted-middleware');
const validateOwnership = require('../middleware/validateOwnership');


// Grab all posts
router.get('/', validateToken, (req, res) => {
    Post.getAll()
        .then(posts => {
            res.status(200).json(posts)
        })
        .catch(err => {
            res.status(500).json(err.message)
        })
});

//Grab all posts by creator_id
router.get('/user/:id', validateToken, (req, res) => {
    const id = req.params.id;
    Post.getAllById(id)
        .then(posts => {
            res.status(200).json(posts)
        })
        .catch(err => {
            res.status(500).json(err.message)
        })
});

router.get('/:id', validateToken, (req, res) => {
    const id = req.params.id;
    Post.findById(id)
        .then(post => {
            res.status(200).json(post)
        })
        .catch(err => {
            res.status(500).json(err.message)
        })
});

router.post('/', validateToken, (req, res) => {
    const newPost = req.body;
    Post.add(newPost)
        .then(post => {
            res.status(201).json(post)
        })
        .catch(err => {
            res.status(500).json(err.message)
        })
});

router.put('/:id', validateToken, validateOwnership, (req, res) => {
    const updates = req.body;
    const {id} = req.params;
    Post.update(id, updates)
        .then(res => {
            if (res != 0){
                res.status(200).json(updates)
            } else {
                res.status(404).json({ message: "No posts were udpated" })
            }
        })
        .catch(err => {
            res.status(500).json(err.message)
        })
});

router.delete('/:id', validateToken, validateOwnership, (req, res) => {
    const id = req.params.id;
    Post.removePost(id)
        .then(numDelete => {
            res.status(200).json({ message: `${numDelete} post/s deleted successfully`})
        })
        .catch(err => {
            res.status(500).json(err.message)
        })
});

module.exports = router;