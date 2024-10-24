const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProduct,
  updateProduct,
  createProduct,
  deleteProduct,
  getProductsByCategory,
} = require("../controllers/productController");

// Define the router
// Get all
router.get("/", getProducts);

// Get a single with id
router.get("/:id", getProduct);

// Update
router.put("/:id", updateProduct);

// Patch
router.patch("/:id", updateProduct);

// Delete
router.delete("/:id", deleteProduct);

// Create
router.post("/", createProduct);

router.get("/category/:category", getProductsByCategory);

module.exports = router;
