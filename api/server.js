const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const server = express()

// Import routes here
const authRouter = require('../helpers/routes/00-auth')
const userRouter = require('../helpers/routes/01-user')
const trainingLogRouter = require('../helpers/routes/02-trainingLog')


server.use(express.json())
server.use(helmet())
server.use(cors())

// Link routes here
server.use('/auth', authRouter)
server.use('/users', userRouter)
server.use('/traininglog', trainingLogRouter)


server.get('/', (req,res) => {
    res.send("I'm on it boss")
})

module.exports = server