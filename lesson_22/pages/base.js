class Base {

    async isContainingInUrl(text) {
        await browser.waitUntil(
            async () => (await browser.getUrl()).includes(text),
            {
                timeout: 3000,
                timeoutMsg: 'The Page is loading more than 5 sec',
            }
        );
        return (await browser.getUrl()).includes(text);
    }

    async isElementVisible(locator){
        const elementIsDisplayed = $(locator);
        await elementIsDisplayed.waitForDisplayed({ timeout: 3000 });
        return elementIsDisplayed.isDisplayed();
    }
}

export { Base };