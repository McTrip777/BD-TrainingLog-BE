const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const server = express()

// Import routes here
const userRouter = require('../helpers/routes/01-user')

server.use(express.json())
server.use(helmet())
server.use(cors())

// Link routes here
server.use('/users', userRouter)


server.get('/', (req,res) => {
    res.send("I'm on it boss")
})

module.exports = server