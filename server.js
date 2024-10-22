const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Product = require("./models/productModel");
const app = express();

// Middleware
app.use(
  cors({
    origin: function (origin, callback) {
      if (origin === "http://localhost:5173" || !origin) {
        callback(null, true); // Allow request
      } else {
        callback(new Error("Not allowed by CORS")); // Deny request
      }
    },
  })
);
app.use(express.json());
// Define the route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Get all
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find({});
    console.log(products);
    res.status(200).json(products);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
});

// Get a single with id
app.get("/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
});

// Update
app.put("/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      return res
        .status(404)
        .json({ message: `Cannot find the product with id ${id}` });
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
});

// Delete
app.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res
        .status(404)
        .json({ message: `Cannot find the product with id ${id}` });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
});

// Create
app.post("/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
});

// Connect to MongoDB
// mongoose.set("strictQuery", false);
mongoose
  .connect("")
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
      console.log("Node Api server running on port 3000");
    });
  })
  .catch((err) => {
    console.log("Error: ", err);
  });
