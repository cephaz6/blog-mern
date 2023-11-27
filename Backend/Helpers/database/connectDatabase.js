const mongoose = require("mongoose")

MONGO_URI="mongodb://abiodunyekeen76:myproject@ac-q90drpn-shard-00-00.6lez2mv.mongodb.net:27017,ac-q90drpn-shard-00-01.6lez2mv.mongodb.net:27017,ac-q90drpn-shard-00-02.6lez2mv.mongodb.net:27017/?ssl=true&replicaSet=atlas-11okep-shard-0&authSource=admin&retryWrites=true&w=majority"

const connectDatabase =async  () => {

    await mongoose.connect(MONGO_URI ,{useNewUrlParser : true})

    console.log("MongoDB Connection Successfully")
    
}


module.exports = connectDatabase
