const mongoose = require("mongoose");

async function connectToDB() {
  await mongoose.connect("mongodb://127.0.0.1:27017/JobDeck");
}

connectToDB()
  .then((e) => {
    console.log("Database connected successfully");
  })
  .catch((e) => {
    "Database not connected!--->";
  });

module.exports = connectToDB;
