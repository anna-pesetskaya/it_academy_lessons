const { Base } = require('./basePage');

class MainPage extends Base {
  constructor(page) {
    super(page);
  }

  get cookiesPanel() {
    return this.page.locator('#CookiesStickyPanel');
  }

  get acceptButton() {
    return this.page.locator('//form[@id="CookiesStickyPanel"]//div[@class="cookies-buttons-wrap"]/button[@data-action-button="acceptAll"]')
  }

  get eShopLink() {
    return this.page.locator('//span[contains(text(),"Интернет-магазин")]');
  }

  get cart() {
    return this.page.locator('#miniCart');
  };

  get searchOpenBtn() {
    return this.page.locator('//button[@id="dropdownGlobalSearch"]');
  };

  get searchField() {
    return this.page.locator('//form[@class="form global-search-form"]//input[contains(@class, "form-input")]');
  };

  get searchFirstResultAutosuggestion() {
    return this.page.locator('(//div[@class="global-search dropdown-menu"]//ul[contains(@class, "ui-autocomplete")]//a[@class="global-search-link"])[1]')
  };

  get failedSearchResults() {
    return this.page.locator('(//div[@class="global-search dropdown-menu"]//ul[contains(@class, "ui-autocomplete")]//a[@class="global-search-no-result"])[1]')
  };

  get authPicture() {
    return this.page.locator('//span[@class="icon icon--user-profile"]');
  };

  get authWay() {
    return this.page.locator('#loginButton')
  };

  get authState() {
    return this.page.locator('//*[@id="dropdownMenuUser"]/span[@class = "icon icon--user-profile is-auth"]')
  };

  async acceptCoockies() {
    await this.cookiesPanel.waitFor({ state: 'visible', timeout: 7000 });
    await this.click(this.acceptButton);

  };

  async search(searchValue) {
    await this.searchOpenBtn.waitFor({ state: 'visible', timeout: 7000 });
    await this.click(this.searchOpenBtn);
    await this.searchField.waitFor({ state: 'visible', timeout: 7000 });
    await this.click(this.searchField);
    await this.searchField.fill(searchValue)
    
  
  };


//   async click_authorisation() {
//     await this.loginField.setValue(loginName);
//     await this.passwordField.setValue(password)
//     await this.pressElement(this.loginButton);
//   }

}

module.exports = MainPage;