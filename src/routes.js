const { Router } = require('express')
const { celebrate, Joi, Segments } = require('celebrate')

const { insertItemMongo } = require('./controllers/create-mongo-controller')
const { readItemMongo } = require('./controllers/read-mongo-controller')
const { deleteItemMongo } = require('./controllers/delete-mongo-controller')
const { updateItemMongo } = require('./controllers/update-mongo-controller')

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
            pc: Joi.boolean()
        }).required()
    })
}), insertItemMongo)

routes.get('/read', celebrate({
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required()
    })
}), readItemMongo)

routes.delete('/deleteById', celebrate({
    [Segments.BODY]: Joi.object().keys({
        _id: Joi.string().required()
    })
}), deleteItemMongo)

routes.put('/update', celebrate({
    [Segments.BODY]: Joi.object().keys({
        _id: Joi.string().required(),
        title: Joi.string().optional(),
        launchYear: Joi.number().optional(),
        developer: Joi.string().optional(),
        platform: Joi.object().keys({
            xbox: Joi.boolean().optional(),
            playstation: Joi.boolean().optional(),
            nintendo: Joi.boolean().optional(),
            pc: Joi.boolean().optional()
        }).optional()
    })
}), updateItemMongo)

module.exports = { routes }