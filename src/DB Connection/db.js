const mongoose = require("mongoose");

async function connectToDB() {
  await mongoose.connect(process.env.MONGO_URI);
}

connectToDB()
  .then((e) => {
    console.log("Database connected successfully");
  })
  .catch((e) => {
    "Database not connected!--->";
  });

module.exports = connectToDB;
