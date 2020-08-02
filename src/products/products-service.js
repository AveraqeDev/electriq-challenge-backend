const config = require('../config');
const fetch = require('node-fetch');

const ProductsService = {
  getAllProducts() {
    return fetch(config.SHOPIFY_ENDPOINT, {
      method: 'GET',
      headers: {
        Authorization: `Basic ${this.getShopifyAuth()}`
      },
    })
      .then(resp => resp.json());
  },

  getShopifyAuth() {
    const authString = `${config.SHOPIFY_API_KEY}:${config.SHOPIFY_PASSWORD}`;
    return this.btoa(authString);
  },

  btoa(string) {
    return Buffer.from(string).toString('base64');
  }
};

module.exports = ProductsService;