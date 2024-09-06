const { Base } = require('./basePage');


class LoginPage extends Base {
  constructor(page) {
    super(page);
  }

  get headerResult() {
    return this.page.locator('//h1[text() = "Вход в аккаунт"]');
  };

  get passwordAuthorization() {
    return this.page.locator('//label[contains(text(),"По паролю")]/span')
  };

  get phoneField() {
    return this.page.locator('#itelephone_new')
  };

  get passwordField() {
    return this.page.locator('#ipassword')
  };

  get signInButton() {
    return this.page.locator('#butt1')
  };

  get errorMessage() {
    return this.page.locator('#false-error') 
  };


  async login(loginName, password) {
    await this.headerResult.waitFor({ state: 'visible', timeout: 7000 });
    await this.click(this.passwordAuthorization);
    await this.phoneField.fill(loginName);
    await this.passwordField.fill(password)
    await this.click(this.signInButton);
  };
}
  module.exports = LoginPage;