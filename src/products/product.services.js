const productController = require("./product.controller");

const postNewProduct = (req, res) => {
  const productObj = req.body;
  productController
    .createProduct(productObj)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((e) => {
      res.status(404).json({ message: "Error al crear un item.", e });
    });
};

const updateProduct = (req, res) => {
  const id = req.params.id;
  const productObj = req.body;

  productController
    .updateProduct(id, productObj)
    .then((data) => {
      if (!data) {
        return res.status(404).json({ message: "Invalid ID" });
      }
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: "Bad request", err });
    });
};

const deleteProduct = (req, res) => {
  const id = req.params.id;
  productController
    .deleteProduct(id)
    .then((data) => {
      if (!data) {
        return res.status(404).json({ message: "Invalid ID" });
      }
      res.status(204).json();
    })
    .catch((err) => {
      res.status(400).json({ message: "Bad request", err });
    });
};

const getAllProducts = (req, res) =>
  productController
    .getProducts()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: "Bad request", err });
    });

module.exports = {
  deleteProduct,
  updateProduct,
  postNewProduct,
  getAllProducts,
};
