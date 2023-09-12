const router = require("express").Router();

const productServices = require("./product.services");
router
  .route("/products")
  .get(productServices.getAllProducts)
  .post(productServices.postNewProduct);
router
  .route("/products/:id")
  .put(productServices.updateProduct)
  .delete(productServices.deleteProduct);

module.exports = router;
