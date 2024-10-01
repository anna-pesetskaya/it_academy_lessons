class MainPage {
  constructor() {}

  get searchField() {
    return cy.get('.digi-search-recording-wrapper > .inp')
  };

  get viewResultsButton() {
    return cy.get('.digi-ac-find__button')
  };


  get errorMessage() {
    return cy.get(':nth-child(2) > .digi-main-scroll-wrapper > .digi-title-empty > .digi-title-empty__wrapper > h2')
  };

 


  async search(searchValue) {
    await this.searchField.should('be.visible');
    await this.searchField.click();
    await this.searchField.type(searchValue)
    await this.viewResultsButton.should('be.visible');
    await this.viewResultsButton.click();
      
  };

  async waitAndClickFirstResult() {
    await this.searchFirstResultAutosuggestion.should('be.visible'); 
    await this.searchFirstResultAutosuggestion.click();
  }

}

module.exports = new MainPage();