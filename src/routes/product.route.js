const express = require('express');
const app = express.Router();
const controller = require('../controllers/product.controller')

app.get("/", controller.getProducts);

app.get("/:id", controller.getProductById);

app.post("/", controller.createProduct);

app.put("/:id", controller.updateProduct);

module.exports = app;