const Products = require("../models/products.model");

const createProduct = async (productObj) => {
  const newProduct = await Products.create({
    img: productObj.img,
    nameItem: productObj.nameItem,
    price: productObj.price,
    description: productObj.description,
  });
  return newProduct;
};

const updateProduct = async (id, productObj) => {
  const selectedProduct = await Products.findOne({
    where: { id: id },
  });
  if (!selectedProduct) return null;
  const productModificated = await selectedProduct.update(productObj);
  return productModificated;
};

const deleteProduct = async (id) => {
  const productItem = await Products.destroy({
    where: { id: id },
  });
  return productItem;
};

const getProducts = async () => {
  const items = await Products.findAll({});
  return items;
};

module.exports = { deleteProduct, updateProduct, createProduct, getProducts };
