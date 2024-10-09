import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.CONNECTION_STRING, {
        dbName: "food-app"
    }).then(() => {
        console.log("Connected to database successfully!");
    }).catch((err) => {
        console.log(`Some error occurred while connecting to the database! ${err}`);
    });
};

