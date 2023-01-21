exports.getProducts = (req, res)=>{
  res.send("All Products")
};

exports.getProductById = (req, res)=>{
  res.send("Product id: " + req.params.id)
}

exports.createProduct = (req, res)=>{
  res.send("Product created");
}

exports.updateProduct = (req, res) => {
  res.send("Product id: " + req.params.id + " completed");
}