import mongoose from "mongoose"

 export const connectDB=async()=>{
   await mongoose.connect("mongodb+srv://shashank:shashank123@cluster0.3qk90.mongodb.net/food-del").then(()=>console.log("DB connected"));
}




