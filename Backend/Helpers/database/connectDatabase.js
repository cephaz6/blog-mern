const mongoose = require("mongoose")

// "mongodb+srv://abiodunyekeen76:myproject@cluster.6lez2mv.mongodb.net/?retryWrites=true&w=majority"
const connectDatabase =async  () => {

    await mongoose.connect(process.env.MONGO_URI ,{useNewUrlParser : true})

    console.log("MongoDB Connection Successfully")

}

module.exports = connectDatabase
