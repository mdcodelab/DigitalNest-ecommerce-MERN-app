const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const User = require("../models/User");

// Get products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Create products
router.post("/", async (req, res) => {
  const { name, description, price, category, images} = req.body;
  try {
    const product = await Product.create({
      name,
      description,
      price,
      category,
      images
    });
    res.status(201).json({ product });
    console.log(req.body.name, req.body.price, req.body.images);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Update products
router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, description, price, category, images } = req.body;
  try {
    const product = await Product.findByIdAndUpdate(id, {
      name,
      description,
      price,
      category,
      images
    });
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Delete products
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const { user_id } = req.body;
  try {
    const user = await User.findOne(user_id);
    if (!user.isAdmin) {
      return res.status(401).json("You don't have permission.");
    }
    await Product.findByIdAndDelete(id);
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Get one
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    const similar = await Product.find({category: product.category}).limit(5);
    res.status(200).json({product, similar});
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Get products by category
// router.get("/category/:category", async (req, res) => {
//   const { category } = req.params;
//   try {
//     const products = await Product.find({ category });
//     res.status(200).json({products});
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// });

router.get("/category/:category", async (req, res) => {
  const { category } = req.params;
  try {
    let products;
    const sort = { _id: -1 };
    if (category == "all") {
      products = await Product.find().sort(sort);
    } else {
      products = await Product.find({ category }).sort(sort);
    }
    res.status(200).json(products);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

module.exports = router;



