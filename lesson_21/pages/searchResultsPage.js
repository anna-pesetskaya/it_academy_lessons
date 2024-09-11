class SearchResultsPage {
  constructor() {}

  get searchResultField() {
    return cy.get('//div[@class="seb-refine-result_all"]');
  }

  get errorMessage() {
    return cy.get('//main//div[@class="text-block-content"]/p');
  }
  
}

module.exports = new SearchResultsPage();