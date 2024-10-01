const loginPage = require('../../pages/loginPage')

describe('Authrorisation in personal accout', () => {
  beforeEach(() => {
    cy.visit('https://5element.by/');
    cy.get('.loader').should('not.exist')
  });

  it('should thow error when enter into personal account with invalid data', () => {
      
    loginPage.login('a.pesetskaya@gmail.com', "11111111Qq");
    (loginPage.errorMessage).should('have.text', 'Пользователь не найден.')
    })


})