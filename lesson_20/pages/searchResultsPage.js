const { Base } = require('./basePage');


class SearchResultsPage extends Base {
  constructor(page) {
    super(page);
  }

  get searchResultField() {
    return this.page.locator('//h2[@class = "banner-info-title c-black banner-info-title-inside"]');
  }

  get errorMessage() {
    return this.page.locator('//main//div[@class="text-block-content"]/p');
  }

  

}

  module.exports = SearchResultsPage;