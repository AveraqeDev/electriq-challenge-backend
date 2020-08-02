const express = require('express');
const ProductsService = require('./products-service');

const productsRouter = express.Router();

productsRouter
  .route('/')
  .get((req, res, next) => {
    ProductsService.getAllProducts()
      .then(products => {
        res.status(200)
          .json(products);
      })
      .catch(next);
  });

module.exports = productsRouter;
