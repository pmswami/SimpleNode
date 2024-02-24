const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  // throw new Error("testing async error");
  const products = await Product.find({});
  res.status(200).json({ nbHits: products.length, products });
};

const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "Products route" });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
