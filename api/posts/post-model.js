const db = require('../../database/connection');

async function add(post){
    const [id] = await db('posts').insert(post, "id");
    return findById(id);
}

function findById(id){
    return db('posts').where('id', id).first();
}

function findBy(filter){
    return db('posts').where(filter).first();
}

function getAll(){
    return db('posts')
}

function getAllById(id){
    return db('posts').where('creator_id', id);
}

function update(id, changes){
    return db('posts')
        .where({ id })
        .update(changes);
}

function removePost(id){
    return db('posts').where('id', id).del();
}

module.exports = {
    add,
    findById,
    findBy,
    getAll,
    getAllById,
    update,
    removePost
};