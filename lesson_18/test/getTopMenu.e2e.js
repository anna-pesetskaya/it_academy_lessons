const homePage = require('../pageobjects/homePage');

describe('WebdriverIO Main Page Top elements check', () => {
    it('should have the correct title and correct top elements', async () => {
        await browser.url('https://webdriver.io/');
        expect(await browser.getTitle()).toEqual('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO');
        await expect (homePage.announcementSection).toBeDisplayed();
        await expect (homePage.apiLink).toBeDisplayed();
        await expect (homePage.docsButton).toBeDisplayed();
        await expect (homePage.blogLink).toBeDisplayed();

        await expect(homePage.docsButton).toHaveText('Docs');
        await expect(homePage.apiLink).toHaveText('API');
        await expect(homePage.blogLink).toHaveText('Blog');
        
    });
});