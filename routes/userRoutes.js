const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const router = express.Router();

//create user
router.post("/signup", async (req, res) => {
    const {name, email, password}=req.body;
    try {
        const user = await User.create({name, email, password});
        res.status(201).json(user);
    } catch (error) {
        if(error.code === 11000) {return res.status(400).send("Email already exists")}
        res.status(400).send(error.message);
    }
})


router.post("/login", async (req, res) => {
  const { email, password } = req.body;
console.log("Email:", email);
console.log("Password:", password);

  try {
    const user = await User.findByCredentials(email, password);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
});


//get (nonAdmin) users
router.get("/", async (req, res) => {
try {
    const user = await User.find({isAdmin: false}).populate("orders");
    res.status(200).json(user);
} catch (error) {
    res.status(400).send(error.message);
}
})

//get orders
router.get("/:id/orders", async (req, res) => {
    const {id}=req.params;
    try {
        const user = await User.findById(id).populate("orders")
        res.status(200).json(user);
    } catch (error) {
        res.status(400).send(error.message);
    }
})

//update user notifications
router.post("/:id/updateNotifications", async (req, res) => {
const {id}=req.params;
try {
    const user = await User.findOne(id);
    user.forEach(notification => {
        notification.status="read";
    })
    user.markModified("notifications");
    await user.save()
    res.status(200).json(user);
} catch (error) {
    res.status(400).send(error.message);
}
})

module.exports=router;



