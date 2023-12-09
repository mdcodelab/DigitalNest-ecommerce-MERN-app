require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("./connectDB");

const Product = require("./models/Product.js");

const products = require("./products.json");

async function start() {
  try {
    await connectDB(process.env.MONGO_URI);
    await Product.deleteMany();
    await Product.create(products);
    console.log("success");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

start();
