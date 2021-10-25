const { GameModel } = require('../database/schemas/gameSchema')

module.exports = {
    handle: async function(_id) {
        const deletedItem = await GameModel.findByIdAndDelete({ _id })

        return { deletedItem }
    }
}