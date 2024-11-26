import foodModel from "../models/foodModel.js";
import fs from 'fs';

// Add food item
const addFood = async (req, res) => {
    try {
        // Validate request body
        const { name, description, price, category } = req.body;
        if (!name || !description || !price || !category) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        // Check if file exists
        if (!req.file) {
            return res.status(400).json({ success: false, message: "Image is required" });
        }

        // Extract filename
        const image_filename =` ${req.file.filename}`;

        // Create new food item
        const food = new foodModel({
            name,
            description,
            price,
            category,
            image: image_filename,
        });

        // Save to database
        await food.save();
        res.status(201).json({ success: true, message: "Food added successfully", food });
    } catch (error) {
        console.error("Error adding food:", error);

        // Delete uploaded file if database operation fails
        if (req.file) {
            fs.unlink(`uploads/${req.file.filename}`, (err) => {
                if (err) console.error("Error deleting file:", err);
            });
        }

        res.status(500).json({ success: false, message: error.message || "An error occurred" });
    }
};

//all food list
const listFood=async(req,res)=>{
    try{
        const foods=await foodModel.find({});
        res.json({success:true,data:foods})
    }
    catch(error){
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

//remove food item
const removeFood=async(req,res)=>{
    try{
        const food=await foodModel.findById(req.body.id)
        fs.unlink(`uploads/${food.image}`,()=>{})
        await foodModel.findByIdAndDelete(req.body.id)
        res.json({success:true,message:"Food Removed"})
    }
    catch(error){
        console.log(error);
        res.json({success:false,message:"Error"})
    }

}
export { addFood,listFood,removeFood};