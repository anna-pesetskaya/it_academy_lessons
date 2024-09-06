const { Base } = require('./basePage');


class SearchResultsPage extends Base {
  constructor(page) {
    super(page);
  }

  get headerResult() {
    return this.page.locator('//h2[@class = "banner-info-title c-white banner-info-title-inside"]');
  }

  get errorMessage() {
    return this.page.locator('//main//div[@class="text-block-content"]/p');
  }


  async waitSearchResults() {
    await this.headerResult.waitFor({ state: 'visible', timeout: 7000 });

  }

}

  module.exports = SearchResultsPage;