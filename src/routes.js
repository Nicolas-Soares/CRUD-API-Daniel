const { Router } = require('express')
const { celebrate, Joi, Segments } = require('celebrate')

const routes = Router()

routes.get('/', (req, res) => res.json({ message: 'Oi' }))

module.exports = { routes }