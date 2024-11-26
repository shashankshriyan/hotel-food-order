import express from 'express'
import { addFood, listFood, removeFood } from '../controllers/foodControllers.js'
import multer from 'multer'
import fs from 'fs';

const uploadDir = './uploads';
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}


const foodRouter=express.Router();

//Image Storage Engine

const storage=multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload=multer({storage:storage})
foodRouter.post("/add",upload.single("image"),addFood)
foodRouter.get("/list",listFood)
foodRouter.post("/remove",removeFood)






export default foodRouter;
