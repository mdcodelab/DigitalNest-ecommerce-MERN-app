require("dotenv").config();
const express = require("express");
const http = require("http");
const app = express();
const cors = require("cors");
const connectDB = require("./connectDB");
const stripe = require("stripe")(process.env.STRIPE_KEY);
const userRoutes=require("./routes/userRoutes");
const productRoutes=require("./routes/productRoutes");

// Middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.send("home page");
});


app.use("/users", userRoutes);
app.use("/products", productRoutes);
// const server = http.createServer(app);
// const { Server } = require("socket.io");
// const io = new Server(server, {
//   cors: "http://localhost:3001",
//   methods: ["GET", "POST", "PATCH", "DELETE"],
// });

// app.post("/payment", (req, res) => {
// const {product, token}=req.body;
// console.log("PRODUCT:", product);
// console.log("PRICE:", price);
// const idempotencyKey=uuid();

// return stripe.customers.create({
//     email: token.email,
//     source: token.id
// }).then((customer) =>{
//     stripe.charges.create({
//         amount: product.price*100,
//         currency: "usd",
//         customer: customer.id,
//         recept_email: token.email,
//         description: `purchase product.name`,
//         shipping: {
//             name: token.card.name,
//         },
//         address: {country: token.card.address_country}
//     }, {idempotencyKey})
// }).then((result)=> {res.status(200).json(result)}).catch(err => console.log(err));
// })

// Listen

const port = process.env.PORT || 5000;
async function start() {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("db connected");
    app.listen(port, () => console.log(`Server is listening at port ${port}`));
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

start();
