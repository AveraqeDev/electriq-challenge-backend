const app = require('../src/app');
const { expect } = require('chai');

describe('Products', () => {
  it('GET /products responds with 200 containing JSON', () => {
    return supertest(app)
      .get('/products')
      .expect(200)
      .expect(res => {
        expect(res.body).to.have.property('products');
        res.body.products.forEach(product => {
          expect(product).to.have.property('id');
          expect(product).to.have.property('title');
          expect(product).to.have.property('variants');
          expect(product).to.have.property('image');
        });
      });
  });
});
