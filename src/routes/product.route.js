const express = require('express');
const app = express.Router();
const controller = require('../controllers/product.controller')

app.get("/", controller.getProducts);

app.get("/:id", controller.getProductById);

app.post("/", controller.createProduct);

app.put("/:id", controller.updateProduct);

app.patch("/:id", controller.addProductReview);

app.delete("/:id", controller.deleteProductById);

app.get("/name/:name", controller.getProductsByName);

// app.get("/price/:price", controller.getProductsByPrice);

module.exports = app;