const goodsPage = require('../../pages/goodsPage')
const cartPage = require('../../pages/cartPage')


describe('Add goods to cart', () => {
    beforeEach(() => {
      cy.visit('https://5element.by/');
      cy.get('.loader').should('not.exist')
    });
  
    it('should check that cart is filled with chosen goods', () => {
        goodsPage.searchSamsungTv()
        goodsPage.addToCart()
        cartPage.checkCart()
      })
  
  
  })