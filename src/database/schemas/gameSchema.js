const { Schema, model } = require("mongoose");

const gameSchema = new Schema({
    title: {
      type: String,
      required: true,
    },
    launchYear: {
      type: Number,
      required: true,
    },
    developer: {
      type: String,
      required: true,
    },
    platform: {
      xbox: {
        available: Boolean,
        default: false
      },
      playstation: {
        available: Boolean,
        default: false
      },
      nintendo: {
        available: Boolean,
        default: false
      },
      pc: {
        available: Boolean,
        default: false
      },
    },
  },
  { timestamps: true }
);

const GameModel = model("Game", gameSchema);

module.exports = { GameModel };
