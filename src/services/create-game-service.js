const { GameModel } = require('../database/schemas/gameSchema')

module.exports = {
    handle: async function(title, launchYear, developer, platform) {
        await GameModel.create({
            title,
            launchYear,
            developer,
            platform
        })

        return { message: 'Criou o item com sucesso!' }
    }
}