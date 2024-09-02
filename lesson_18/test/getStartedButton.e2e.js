const homePage = require('../pageobjects/homePage');

describe('WebdriverIO Main Page Get Started Button', () => {
    it('should navigate to the "Get Started" page when clicked on DOCS', async () => {
        homePage.navigate('https://webdriver.io/');
        await homePage.pressDocsButton();
        await expect(browser).toHaveUrl('https://webdriver.io/docs/gettingstarted');
        expect(await browser.getTitle()).toContain('WebdriverIO');
    });
});