const createGame = require('../services/create-game-service')

async function insertItemMongo(req, res) {
    try {
        const { title, launchYear, developer, platform } = req.body
        const response = await createGame.handle(title, launchYear, developer, platform)

        res.status(200).json(response)
    } catch (error) {
        return res.status(404).json({
            message: error.message
        })
    }
}

module.exports = { insertItemMongo }