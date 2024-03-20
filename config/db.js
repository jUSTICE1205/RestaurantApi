const mongoose = require("mongoose");

//databse connection
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Conneced to database " + mongoose.connection.host);
  } catch (error) {
    console.log(`error connecting the database ${error}`);
  }
};

module.exports = connectDb;
