const config = require('../config');

const ProductsService = {
  getAllProducts() {
    return fetch(config.SHOPIFY_ENDPOINT, {
      method: 'GET',
      Authorization: `Basic ${this.getShopifyAuth()}`,
    })
      .then(resp => resp.json());
  },

  getShopifyAuth() {
    const authString = `${config.SHOPIFY_API_KEY}:${config.SHOPIFY_PASSWORD}`;
    return btoa(authString);
  }
};

module.exports = ProductsService;