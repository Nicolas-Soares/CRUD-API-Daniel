const updateGame = require('../services/update-game-service')

async function updateItemMongo(req, res) {
    try {
        const { _id, title, launchYear, developer, platform } = req.body
        const response = await updateGame.handle(_id, title, launchYear, developer, platform)

        res.status(200).json(response)
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}

module.exports = { updateItemMongo }