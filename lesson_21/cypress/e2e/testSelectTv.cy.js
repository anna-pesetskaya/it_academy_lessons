const goodsPage = require('../../pages/goodsPage')


describe('Filtering', () => {
    beforeEach(() => {
      cy.visit('https://5element.by/');
      cy.get('.loader').should('not.exist')
    });
  
    it('should select values accocding to selected filters', () => {
        goodsPage.searchSamsungTv()
      })
  
  
  })