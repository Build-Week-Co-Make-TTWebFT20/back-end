const router = require('express').Router();
const Post = require('./post-model');
const checkForm = require('./post-middleware');


// Grab all posts
router.get('/', (req, res) => {
    Post.getAll()
        .then(posts => {
            res.status(200).json(posts)
        })
        .catch(err => {
            res.status(500).json(err.message)
        })
});

//Grab all posts by creator_id
router.get('/user/:id', (req, res) => {
    const id = req.params.id;
    Post.getAllById(id)
        .then(posts => {
            res.status(200).json(posts)
        })
        .catch(err => {
            res.status(500).json(err.message)
        })
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    Post.findById(id)
        .then(post => {
            res.status(200).json(post)
        })
        .catch(err => {
            res.status(500).json(err.message)
        })
})

router.post('/', checkForm, (req, res) => {

})

module.exports = router;