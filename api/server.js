const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const { authorization } = require('../helpers/models/00-auth')

const server = express()

// Import routes here

const authRouter = require('../helpers/routes/00-auth')
const userRouter = require('../helpers/routes/01-user')
const trainingLogRouter = require('../helpers/routes/02-trainingLog')


server.use(express.json())
server.use(helmet())
server.use(cors())

// Link routes here
server.use('/auth',  authRouter)
server.use('/users',authorization, userRouter)
server.use('/traininglog',authorization, trainingLogRouter)


server.get('/', (req,res) => {
    res.send("I'm on it boss")
})

module.exports = server