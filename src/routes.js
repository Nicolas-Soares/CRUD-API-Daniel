const { Router } = require('express')
const { celebrate, Joi, Segments } = require('celebrate')

const { insertItemMongo } = require('./controllers/create-mongo-controller')

const routes = Router()

routes.post('/create', celebrate({
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        launchYear: Joi.number().required(),
        developer: Joi.string().required(),
        platform: Joi.object().keys({
            xbox: Joi.boolean(),
            playstation: Joi.boolean(),
            nintendo: Joi.boolean(),
            PC: Joi.boolean()
        }).required()
    })
}), insertItemMongo)

module.exports = { routes }