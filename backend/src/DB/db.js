const mongoose =  require("mongoose");

const connectDB = async () => {

    try {

        await mongoose.connect(
            "mongodb+srv://firstdatabse:itUSrmCn8dlgnzT3@cluster0.a6pj9be.mongodb.net/?appName=Cluster0"
        );

        console.log("MongoDB Connected Successfully");

    } 
    
    catch (error) {

        console.log("Database Connection Error");

        console.log(error);

    }
};

module.exports = connectDB;