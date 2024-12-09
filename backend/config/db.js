import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://jashan0812:Yoyohoneysingh0812@cluster0.wixif.mongodb.net/food-del').then(()=>console.log("DataBase Connected"));
}
