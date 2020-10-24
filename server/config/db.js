const mongoose = require("mongoose");
const mongoURI = process.env.mongoURI;

const connectDB = async () => {
    try{
        await mongoose.connect(mongoURI,{
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log('MongoDb Atlas is connected with our app')
    }catch(err){
        console.log(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;