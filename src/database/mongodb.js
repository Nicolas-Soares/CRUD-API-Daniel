const mongoose = require("mongoose");

function connectToDatabase() {
  mongoose.connect(`${process.env.MONGODB_DATABASE_URL}`);

  const db = mongoose.connection;

  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", () => {
    console.log("Connected to database!");
  });
}

module.exports = { connectToDatabase }
