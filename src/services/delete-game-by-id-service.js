const { GameModel } = require('../database/schemas/gameSchema')

module.exports = {
    handle: async function(_id) {
        return await GameModel.findByIdAndDelete({ _id })
    }
}