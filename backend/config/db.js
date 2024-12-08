import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://Write your key here from MongoDB').then(()=>console.log("DataBase Connected"));
}
