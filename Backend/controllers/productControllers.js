const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");
const cloudinary = require("../middlewares/cloudinary");

const addProduct = asyncHandler(async (req, res) => {
  const { name, description, category, price } = req.body;

  if (!req.file) {
    res.status(400);
    throw new Error("Please upload a product image");
  }

  const image = await cloudinary.uploader.upload(req.file.path);

  if (!name || !description || !category || !price) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  const existingProduct = await Product.findOne({
    name: new RegExp("^" + name + "$", "i"),
  });

  if (existingProduct) {
    res.status(400);
    throw new Error("Product already exists");
  }

  const product = await Product.create({
    name,
    description,
    category,
    price,
    image: image.secure_url,
  });

  res.status(201).json({
    id: product.id,
    name: product.name,
    description: product.description,
    category: product.category,
    price: product.price,
    image: product.image,
  });
});

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();
  res.status(200).json(
    products.map((product) => {
      return {
        id: product.id,
        name: product.name,
        description: product.description,
        category: product.category,
        price: product.price,
        image: product.image,
      };
    })
  );
});

const updateProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  const { name, description, category, price } = req.body;
  let image;

  if (!req.file) {
    image = product.image;
  } else {
    image = await cloudinary.uploader.upload(req.file.path);
  }

  const updatedProduct = await Product.findOneAndUpdate(
    req.params.id,
    {
      name,
      description,
      category,
      image: req.file ? image.secure_url : image,
      price,
    },
    {
      new: true,
    }
  );

  res.status(200).json({
    id: updatedProduct.id,
    name: updatedProduct.name,
    description: updatedProduct.description,
    category: updatedProduct.category,
    price: updatedProduct.price,
    image: updatedProduct.image,
  });
});

const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  res.status(200).json(product);
});

module.exports = {
  addProduct,
  getProducts,
  updateProduct,
  deleteProduct,
};
