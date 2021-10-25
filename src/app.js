require('dotenv').config()

const { errors } = require('celebrate')
const { routes } = require('./routes')
const { connectToDatabase } = require('./database/mongodb')

const express = require('express')

const app = express()

connectToDatabase()

app.use(express.json())
app.use(routes)
app.use(errors())
app.listen(process.env.PORT || 3333, () => console.log('Server running'))