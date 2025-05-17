import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://jashanjot635:Yoyohoneysingh2512@cluster0.cq0hvd4.mongodb.net/food-del').then(()=>console.log("DataBase Connected"));
}
