const updateGame = require('../services/update-game-service')

async function updateItemMongo(req, res) {
    try {
        
    } catch (error) {
        return res.status(404).json({
            message: error.message
        })
    }
}

module.exports = { updateItemMongo }