const db = require('../../database/connection');
const Post = require('../posts/post-model');

function update(id, updates){
    console.log(updates)
    return db('votes').where('id', id).update({"direction": updates});
}

function addUpvote(upvote){
    return db('votes').insert(upvote, "id");
}

async function upVote(postId, username, direction){
    // grab the user profile so we can reference the id
    const votedPost = await db('users').where('username', username).first();
    const [vote] = await db('votes')
        .where({'post_id': postId, 'user_id': votedPost.id});
    console.log(vote)
    if (typeof vote === "object"){
        console.log('update was called')
        return update(vote.id, direction);
    } else {
        let newEntry = { 'post_id': postId, 'user_id': votedPost.id, direction };
        return addUpvote(newEntry);
    }
}

// async function downVote(postId, username){
//     const {id} = await db('users').where('username', username).first();
// }

module.exports = {
    upVote
}