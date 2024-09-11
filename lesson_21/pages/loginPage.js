class LoginPage {
  constructor() {}

  get loginButton () {
    return cy.get(':nth-child(3) > .h-drop__head > .h-drop__text').wait(10000)
  };


  get emailField() {
    return cy.get('[style=""] > .modal-popup > .modal-popup__body > .modal-popup-form > form > :nth-child(1) > .inp').wait(5000)
  };

  get passwordField() {
    return cy.get('[style=""] > .modal-popup > .modal-popup__body > .modal-popup-form > form > :nth-child(2) > .inp').wait(1000)
  };

  get submitButton() {
    return cy.get('[style=""] > .modal-popup > .modal-popup__body > .modal-popup-form > form > :nth-child(4)').wait(1000)
  };

  get errorMessage() {
    return cy.get('form > :nth-child(1) > .inp-required').wait(5000)//Пользователь не найден.


  };


  async login(email, password) {
    await this.loginButton.click()
    await this.emailField.should('be.visible').should('not.be.disabled');
    await this.emailField.click()
    await this.emailField.type(email);
    await this.passwordField.click()
    await this.passwordField.type(password)
    await this.submitButton.click();
  };
}
module.exports = new LoginPage();