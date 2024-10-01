import { Base } from '../pages/base.js'



class HomePage extends Base {
    async inputData(locator, value) {
        const element = $(locator);
        await element.waitForDisplayed({ timeout: 3000 });
        await element.setValue(value);
    }
}


export { HomePage };