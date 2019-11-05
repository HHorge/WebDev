const mongoose = require("mongoose");
const mongoDB = 'mongodb://horge:123@it2810-08.idi.ntnu.no:27017/project3'

//Establishing connection to mongodb on the virtual machine
const connectToDB = async () => {
    try{
        await mongoose.connect(mongoDB, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        });
        console.log("Connected to database")
    } catch (e){
        console.log(e.message);
        process.exit(1);
    }
    
}

module.exports = connectToDB;