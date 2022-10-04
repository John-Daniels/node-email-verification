const mongoose = require("mongoose")

const main = () => {
  try {
    const uri = process.env.MONGO_URI
    mongoose.connect(uri)
    console.log("[server]: Db Connected succesfully")
  } catch (e) {
    console.log("Db failed to connect", e)
  }
}

main()
