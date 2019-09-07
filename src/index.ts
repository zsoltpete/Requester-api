import express from 'express'
import dotenv from 'dotenv'
import { connectToMongoDb } from './store/init'
import apiHandler from './api/api'

const app = express()
dotenv.config()

app.use(express.json())

;(function () {
  connectToMongoDb().catch((reason) => {
    console.error(reason)
    process.exit(1)
  })
})()

app.use('/api', apiHandler)

app.use('*', (req, res) => {
  res.status(404).send(`Resource not found on '${req.originalUrl}'`)
})

app.listen(3000, () => console.info('Listenning on port 3000'))