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
        type: Boolean,
        default: false
      },
      playstation: {
        type: Boolean,
        default: false
      },
      nintendo: {
        type: Boolean,
        default: false
      },
      pc: {
        type: Boolean,
        default: false
      },
    },
  },
  { timestamps: true }
);

const GameModel = model("Game", gameSchema);

module.exports = { GameModel };
