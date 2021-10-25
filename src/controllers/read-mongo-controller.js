const readGame = require('../services/read-game-service')

async function readItemMongo(req, res) {
    try {
        const response = await readGame.handle()

        res.status(200).json(response)
    } catch (error) {
        return res.status(404).json({
            message: error.message
        })
    }
}

module.exports = { readItemMongo }