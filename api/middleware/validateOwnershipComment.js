const db = require('../../database/connection')
// This function takes the userId and postID of a request and determines if they are the same.
// It is used for delete and edit requests.
async function validateCommentOwnership(req, res, next){
    const {username} = req.decodedJwt;
    const userId = await db('users').select('id').where('username', username).first();
    const commentId = req.params.id;
    const comment = await db('comments').select('user_id').where('id', commentId).first();
    if (userId.id == comment.user_id){
        next()
    } else {
        res.status(404).json({ message: "You can only edit or delete your own comments" })
    }
};

module.exports = validateCommentOwnership;