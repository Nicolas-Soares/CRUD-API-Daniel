const deleteGame = require('../services/delete-game-by-id-service')

async function deleteItemMongo(req, res) {
    try {
        const { _id } = req.body
        const response = await deleteGame.handle(_id)

        res.status(200).json(response)
    } catch (error) {
        return res.status(404).json({
            message: error.message
        })
    }
}

module.exports = { deleteItemMongo }