const db = require('../../database/connection')
// This function takes the userId and postID of a request and determines if they are the same.
// It is used for delete and edit requests.
async function validateOwnership(req, res, next){
    const {username} = req.decodedJwt;
    const userId = await db('users').select('id').where('username', username).first();
    const postId = req.params.id;
    const post = await db('posts').select('creator_id').where('id', postId).first();
    if (userId.id == post.creator_id){
        next()
    } else {
        res.status(404).json({ message: "You can only edit or delete your own posts" })
    }
};

module.exports = validateOwnership;