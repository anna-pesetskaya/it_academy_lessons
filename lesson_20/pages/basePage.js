class Base {
    constructor(page) {
        this.page = page;
      }

    async launch() {
        this.browser = await chromium.launch();
        this.page = await this.browser.newPage();
    }

    async close() {
        await this.browser.close();
    }

    async goto(url) {
        await this.page.goto(url);
    }

    async getTitle() {
        return await this.page.title();
    }

    async click(element) {
        await element.click();
    }

    // async fill(selector, text) {
    //     await this.page.fill(selector, text);
    // }

    // async innerText(selector) {
    //     return await this.page.innerText(selector);
    // }

    // async waitForSelector(selector) {
    //     await this.page.waitForSelector(selector);
    // }
}

module.exports = { Base }