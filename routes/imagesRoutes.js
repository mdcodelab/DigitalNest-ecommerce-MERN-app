require("dotenv").config();
const express = require("express");
const cloudinary = require("cloudinary");
const router = express.Router();

cloudinary.config ({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY, 
    api_secret: process.env.CLOUD_API_SECRET
})

router.delete("/:public_id", async (req, res) => {
const {public_id}=req.params;
try {
   await cloudinary.uploader.destroy(public_id);
   res.status(200).send("image deleted"); 
} catch (error) {
    res.status(400).send(error.message);
}
})

module.exports=router;
