const { GameModel } = require("../database/schemas/gameSchema");

module.exports = {
  handle: async function () {
    const gamesFromDatabase = await GameModel.find({});

    return gamesFromDatabase;
  },
};
