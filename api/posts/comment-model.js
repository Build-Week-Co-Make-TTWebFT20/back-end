const db = require('../../database/connection');

function getById(id){
    return db('comments').where('id', id).first();
}

function getByPostId(id){
    return db('comments').where('post_id', id);
}

async function addComment(comment, username, postId){
    const {id} = await db('users').where('username', username).first();
    const newComment = {
        text_data: comment,
        post_id: postId,
        user_id: id
    }
    const [newId] = await db('comments').insert(newComment, "id");
    return getById(newId);
}

function updateComment(id, changes){
    return db('comments')
        .where({ id })
        .update(changes);
}

function removeComment(id){
    return db('comments').where('id', id).del();
}

module.exports = {
    addComment,
    updateComment,
    removeComment,
    getById,
    getByPostId
}