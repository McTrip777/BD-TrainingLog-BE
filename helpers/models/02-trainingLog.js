const db = require('../../data/dbConfig');

module.exports = {
    add,
    getUserTrainingLogs,
    update,
    destroy
}

async function add(trainingLog){
    const [id] = await db('trainingLogs').insert(trainingLog);

    return db('trainingLogs').where({ id }).first()
}

function getUserTrainingLogs(userID){
    return db('trainingLogs')
        .join('users', 'users.id', 'trainingLogs.user_id')
        .select('trainingLogs.*' )
        .where('trainingLogs.user_id', userID)
}

async function update(id, changes){
    return db('trainingLogs')
        .where({id})
        .update(changes)
}

function destroy(id){
    return db('trainingLogs').where({id}).del()
}