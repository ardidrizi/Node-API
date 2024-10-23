const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProduct,
  updateProduct,
  createProduct,
  deleteProduct,
} = require("../controllers/productController");
const Product = require("../models/productModel");

// Define the router
// Get all
router.get("/", getProducts);

// Get a single with id
router.get("/:id", getProduct);

// Update
router.put("/:id", updateProduct);

// Delete
router.delete("/:id", deleteProduct);

// Create
router.post("/", createProduct);

module.exports = router;
