const db = require('../../data/dbConfig');

module.exports = {
    find,
    getBy,
    findById,
    destroy,
    add,
    getUserTrainingLogs,
}

function find(){
    return db('users')
}

function findById(id) {
    return db('users')
      .where({ id })
      .first();
  }

async function add(user){
    const [id] = await db('users').insert(user);

    return db('users').where({ id }).first()
}

function getBy(select){
    return db('users').where(select).first();
}


function destroy(id){
    return db('users').where({ id }).del()
}

function getUserTrainingLogs(userID){
    return db('trainingLogs')
        .join('users', 'users.id', 'trainingLogs.user_id')
        .select('trainingLogs.*' )
        .where('trainingLogs.user_id', userID)
}