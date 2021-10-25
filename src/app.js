require('dotenv').config()

const { errors } = require('celebrate')
const { routes } = require('./routes')

const express = require('express')

const app = express()

//conectar ao banco

app.use(express.json())
app.use(routes)
app.use(errors())
app.listen(process.env.PORT || 3333, () => console.log('Server running'))