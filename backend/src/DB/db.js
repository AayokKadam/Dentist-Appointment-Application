const mongoose =  require("mongoose");

const connectDB = async () => {

    try {

        await mongoose.connect(
            "a3f7c2d9e8b4f1a6c5d7e9b2a1f3c4d5e6f7a8b9"
        );

        console.log("MongoDB Connected Successfully");

    } 
    
    catch (error) {

        console.log("Database Connection Error");

        console.log(error);

    }
};

module.exports = connectDB;
