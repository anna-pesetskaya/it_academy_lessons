const homePage = require('../pageobjects/homePage');

describe('WebdriverIO search option check', () => {
    it('should be serch results according to search value', async () => {
        await browser.url('https://webdriver.io/');
        expect(await browser.getTitle()).toEqual('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO');
        await homePage.pressSearchButton()
        await homePage.executeSearch('browser')
        browser.keys('Enter')
        await homePage.checkSearchResults('The Browser Object')
    });
});