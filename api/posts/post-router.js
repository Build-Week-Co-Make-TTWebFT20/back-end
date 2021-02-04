const router = require('express').Router();
const Post = require('./post-model');
const Comment = require('./comment-model');
const User = require('../users/user-model');
const checkForm = require('./post-middleware');
const validateToken = require('../auth/restricted-middleware');
const validateOwnership = require('../middleware/validateOwnership');
const validateCommentOwnership = require('../middleware/validateOwnershipComment');


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

router.post('/', validateToken, async (req, res) => {
    const currentUser = req.decodedJwt.username;
    const userId = await User.findBy({username: currentUser}); // grab the user object based on their username
    const newPost = {...req.body, "creator_id": userId.id}; // submit new post with creator_id as username's id, cont..
    // It's a bit stringy to change now, but best case scenario would have been to store the username with the post 
    // as the author rather than 'creator_id'. Because I didn't do that, now I have to hack this together...
    Post.add(newPost)
        .then(post => {
            res.status(201).json(post)
        })
        .catch(err => {
            res.status(500).json(err.message)
        })
});

// This endpoint returns all of the comments for a given post
router.get('/:id/comments', validateToken, (req, res) => {
    const {id} = req.params;
    Comment.getByPostId(id)
        .then(comments => {
            res.status(200).json(comments)
        })
        .catch(err => {
            res.status(500).json(err.message)
        })
});

// This endpoint returns a specific comment by id
router.get('/comments/:id', validateToken, (req, res) => {
    const {id} = req.params;
    Comment.getById(id)
        .then(comment => {
            res.status(200).json(comment)
        })
        .catch(err => {
            res.status(500).json(err.message)
        })
});

router.post('/:id/comments', validateToken, (req, res) => {
    const {text_data} = req.body;
    Comment.addComment(text_data, req.decodedJwt.username, req.params.id)
        .then(result => {
            res.status(201).json(result)
        })
        .catch(err => {
            res.status(500).json(err.message)
        })
});

router.put('/comments/:id', validateToken, (req, res) => {
    const updates = req.body;
    const {id} = req.params;
    Comment.updateComment(id, updates)
        .then(result => {
            res.status(200).json(updates)
        })
        .catch(err => {
            res.status(500).json(err.message)
        })
});

router.put('/:id', validateToken, validateOwnership, (req, res) => {
    const updates = req.body;
    const {id} = req.params;
    Post.update(id, updates)
        .then(result => {
            if (result != 0){
                res.status(200).json(updates)
            } else {
                res.status(404).json({ message: "No posts were udpated" })
            }
        })
        .catch(err => {
            res.status(500).json({
                "message": err.message,
                "payload": updates,
                "id": id,
                "username": req.decodedJwt.username
                })
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

router.delete('/comments/:id', validateToken, validateCommentOwnership, (req, res) => {
    const {id} = req.params;
    Comment.removeComment(id)
        .then(numDelete => {
            res.status(200).json({ message: `${numDelete} post/s deleted successfully`})
        })
        .catch(err => {
            res.status(500).json(err.message)
        })
});

module.exports = router;