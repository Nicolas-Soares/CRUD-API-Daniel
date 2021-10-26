const { GameModel } = require("../database/schemas/gameSchema");

module.exports = {
  handle: async function () {
    return await GameModel.find({});
  },
};
