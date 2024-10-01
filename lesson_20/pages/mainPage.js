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
    await this.acceptButton.click();

  };

  async clickToAuthorise() {
    await this.authPicture.click();
    await this.authWay.waitFor({ state: 'visible', timeout: 10000 });
    await this.authWay.click();
  }

  async search(searchValue) {
    await this.searchOpenBtn.waitFor({ state: 'visible', timeout: 7000 });
    await this.searchOpenBtn.click();
    await this.searchField.waitFor({ state: 'visible', timeout: 7000 }); 
    await this.searchField.click()
    await this.searchField.fill(searchValue)
      
  };

  async waitAndClickFirstResult() {
    await this.searchFirstResultAutosuggestion.waitFor({ state: 'visible', timeout: 10000 }); 
    await this.searchFirstResultAutosuggestion.click();
  }

}

module.exports = MainPage;