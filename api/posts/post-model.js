const { clean } = require('knex-cleaner');
const db = require('../../database/connection');

async function add(post){
    const [id] = await db('posts').insert(post, "id");
    return findById(id);
}

function findById(id, userId){
    return db('posts as p')
        .leftJoin('votes as v', 'v.post_id', 'p.id')
        .sum('v.direction')
        .select('p.id', 'p.post_name','p.description','p.city','p.abr_state','p.zip')
        .groupBy('p.id')
        .where('p.id', id)
        .first()
        .then(async data => {
            console.log(userId)
            // return db('votes as v').where('v.user_id', userId).select('v.direction')
            const userVotes = await db('votes as v').where('v.user_id', userId.id);
            console.log("uservotes:", userVotes)
            userVotes.map(vote => {
                if(data.id == vote["post_id"]){
                    data["user_direction"] = vote["direction"]
                } else {
                }
            });
            return data
        })
}

function findBy(filter){
    return db('posts').where(filter).first();
}

function getAll(userId){
    const {id} = userId;
    return db('posts as p')
    .sum('v.direction as score')
        .leftJoin('votes as v', 'v.post_id', 'p.id')
        .join('users as u', 'p.creator_id', 'u.id')
        .groupBy('p.id', 'u.id')
        // .select('v.direction').whereIn('v.user_id', [id])
        .select('p.id', 'p.post_name','p.description','p.city','p.abr_state','p.zip', 'u.username as author')
        .orderBy('p.id')
        .then(async data => {
            // return db('votes as v').where('v.user_id', userId).select('v.direction')
            const userVotes = await db('votes as v').where('v.user_id', id);
            // console.log(userVotes)
            const combinedData = data.map(obj => {
                for(let i = 0; i < userVotes.length; i++){
                    if(obj.id == userVotes[i]["post_id"]){
                        obj["user_direction"] = userVotes[i]["direction"]
                        return obj
                    } else {
                    }
                }
                obj["user_direction"] = null;
                return obj
            });
            // console.log(combinedData)
            return combinedData
        })
        // .select('v.direction').where('v.user_id', userId)

}

function getAllById(id, userId){
    return db('posts as p')
        .leftJoin('votes as v', 'v.post_id', 'p.id')
        .sum('v.direction')
        .select('p.id', 'p.post_name','p.description','p.city','p.abr_state','p.zip')
        .groupBy('p.id')
        .where('p.creator_id', id)
        .then(async data => {
            // return db('votes as v').where('v.user_id', userId).select('v.direction')
            const userVotes = await db('votes as v').where('v.user_id', userId.id);
            // console.log(userVotes)
            const combinedData = data.map(obj => {
                for(let i = 0; i < userVotes.length; i++){
                    if(obj.id == userVotes[i]["post_id"]){
                        obj["user_direction"] = userVotes[i]["direction"]
                        return obj
                    } else {
                    }
                }
                obj["user_direction"] = null;
                return obj
            });
            // console.log(combinedData)
            return combinedData
        })
        
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