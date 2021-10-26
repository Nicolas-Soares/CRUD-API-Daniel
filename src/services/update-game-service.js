const { GameModel } = require('../database/schemas/gameSchema')

module.exports = { 
    handle: async function (_id, title, launchYear, developer, platform1) {
        const selectedGame = await GameModel.findByIdAndUpdate(_id, { title, launchYear, developer })
        const x = { ...selectedGame.platform, ...platform1 }
        selectedGame.platform = x
        await selectedGame.save()
        return selectedGame
    }
}