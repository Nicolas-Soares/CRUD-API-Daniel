const { GameModel } = require('../database/schemas/gameSchema')

async function refactorPlatformFieldAndUpdate(selectedGame, platform) {
    const newPlatform = { ...selectedGame.platform, ...platform }

    selectedGame.platform = newPlatform

    await selectedGame.save()

    return selectedGame
}

module.exports = { 
    handle: async function (_id, title, launchYear, developer, platform) {
        const selectedGame = await GameModel.findByIdAndUpdate(_id, { title, launchYear, developer })
        
        return await refactorPlatformFieldAndUpdate(selectedGame, platform)
    }
}