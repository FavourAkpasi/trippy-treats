const express = require("express");
const router = express.Router();
const upload = require("../middlewares/multer");
const {
  requiresAuth,
  requiresAdminAuth,
} = require("../middlewares/authMiddleware");

const {
  addProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} = require("../controllers/productControllers");

router.post(
  "/addProduct",
  requiresAdminAuth,
  upload.single("image"),
  addProduct
);

router.get("/getProducts", getProducts);

router.put(
  "/updateProduct/:id",
  requiresAdminAuth,
  upload.single("image"),
  updateProduct
);

router.delete("/deleteProduct/:id", requiresAdminAuth, deleteProduct);

module.exports = router;
