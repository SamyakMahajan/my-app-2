// Import necessary modules
const express = require("express");
const DB = require("./backend/connect");
const Product = require("./backend/model"); // Import the Product model
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const path = require("path");

const app = express();

// Enable CORS for all routes
app.use(cors());

app.use(express.json()); // Middleware to parse JSON requests

app.post("/addProduct", async (req, res) => {
  try {
    const { name } = req.body; // Extract product details from request body

    // Create a new product instance using the Product model
    const newProduct = new Product({
      name,
    });

    // Save the new product to the database
    const savedProduct = await newProduct.save();

    res.status(201).json(savedProduct); // Respond with the saved product
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/allProducts", async (req, res) => {
  try {
    const allProducts = await Product.find(); // Retrieve all products from the database
    res.json(allProducts); // Respond with all products
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.delete("/deleteProduct/:id", async (req, res) => {
  try {
    const productId = req.params.id; // Extract product ID from request parameters

    // Find the product by ID and delete it
    const deletedProduct = await Product.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json({ message: "Product deleted successfully", deletedProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

DB(); // Connect to the database

// production script
app.use(express.static("./frontend/build"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
