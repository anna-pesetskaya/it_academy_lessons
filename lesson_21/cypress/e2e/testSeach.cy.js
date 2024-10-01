const mainPage = require('../../pages/mainPage')
const searchResultsPage = require('../../pages/searchResultsPage')

describe('Search test', function () {
    
    beforeEach(() => {
        cy.visit('https://5element.by/');
        cy.get('.loader').should('not.exist')
      });
  
   
    it('should be valid search results', () => {
        mainPage.search('Samsung');
        cy.url().should('eq', 'https://5element.by/?digiSearch=true&term=Samsung&params=%7Csort%3DDEFAULT')

    })

    it('should be error message when invalid data is passed into search field', () => {
        mainPage.search('fffffffffffffffffff');
        cy.get(':nth-child(2) > .digi-main-scroll-wrapper > .digi-title-empty > .digi-title-empty__wrapper > h2').should('have.text', 'По запросу «fffffffffffffffffff» товаров не найдено. Попробуйте изменить ваш запрос')
    })
})