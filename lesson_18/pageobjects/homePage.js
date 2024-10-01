const { Base } = require('./base');

class HomePage extends Base {
    constructor() {
      super();
    }

    get apiLink() {
        return $('div[class="navbar__items"] a[href="/docs/api"]');
    }

    get blogLink() {
        return $('div[class="navbar__items"] a[href="/blog"]');
    }

    get announcementSection() {
        return $('div[role="banner"]');
    }

    get searchField() {
        return $('.DocSearch-Button-Placeholder');
    }

    get inputField() {
        return $('#docsearch-input');
    }

    get searchResults() {
        return $('//ul[@id="docsearch-list"]//li[@class="DocSearch-Hit"]');
    }

       
    get docsButton() {
        return $('div[class = "navbar__items"] a[href="/docs/gettingstarted"]');
    }
    
    get pageTitle() {
        return $('div[class="theme-doc-markdown markdown"] header h1');
    }
    
        
    async pressApiLink() {
        await this.apiLink.click();
    }

    async pressDocsButton() {
        await this.docsButton.click(); 
    }

    async pressSearchButton() {
        await this.searchField.isDisplayed();
        await this.searchField.click(); 
    }

    async executeSearch(searchValue) {
        await this.inputField.waitForDisplayed({ timeout: 3000 });
        await this.inputField.setValue(searchValue); 
        await this.searchResults.waitForDisplayed({ timeout: 5000 });      
    }

    async checkSearchResults(titleText) {
        await this.pageTitle.waitForDisplayed({ timeout: 5000 });
        expect(await browser.getTitle()).toContain(titleText)

    }

}

module.exports = new HomePage();