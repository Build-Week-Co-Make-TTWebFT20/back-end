const db = require('../../database/connection');

async function add(post){
    const [id] = await db('posts').insert(post, "id");
    return findById(id);
}

function findById(id){
    return db('posts as p')
        .leftJoin('votes as v', 'v.post_id', 'p.id')
        .sum('v.direction')
        .select('p.id', 'p.post_name','p.description','p.city','p.abr_state','p.zip')
        .groupBy('p.id')
        .where('p.id', id)
        .first();
}

function findBy(filter){
    return db('posts').where(filter).first();
}

function getAll(){
    return db('posts as p')
        .leftJoin('votes as v', 'v.post_id', 'p.id')
        .join('users as u', 'p.creator_id', 'u.id')
        .sum('v.direction as score')
        .groupBy('p.id', 'u.id')
        .select('p.id', 'p.post_name','p.description','p.city','p.abr_state','p.zip', 'u.username as author')
}

function getAllById(id){
    return db('posts as p')
        .leftJoin('votes as v', 'v.post_id', 'p.id')
        .sum('v.direction')
        .select('p.id', 'p.post_name','p.description','p.city','p.abr_state','p.zip')
        .groupBy('p.id')
        .where('p.creator_id', id);
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