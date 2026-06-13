const mongoose =  require("mongoose");

const connectDB = async () => {

    try {

        await mongoose.connect(
            ""
        );

        console.log("MongoDB Connected Successfully");

    } 
    
    catch (error) {

        console.log("Database Connection Error");

        console.log(error);

    }
};

module.exports = connectDB;
