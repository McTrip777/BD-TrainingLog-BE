const router = require('express').Router();
const TrainingLog = require('../models/02-trainingLog');

// traininglogs/user/user_id/
router.get('/foruser/:user_id', async (req, res) => {
    try{
        let trainingLog = await TrainingLog.getUserTrainingLogs(req.params.user_id)
        if(trainingLog){
            res.status(200).json(trainingLog)
        } else {
            res.status(404).send('Training Log not found')
        }
    } catch(error){
        res.status(500).json(error)
    }
})

router.post('/', async (req, res) => {
    try{
        trainingLog = await TrainingLog.add(req.body)
        res.status(200).json(trainingLog)
    } catch(error){
        res.status(500).json(error)
    }
})

router.put('/:id', async (req, res) => {
    try {
    let changes = await TrainingLog.update(req.params.id, req.body)
    if(changes){
        res.status(200).json(changes)
    } else {
        res.status(404).json('could not update')
    }
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router