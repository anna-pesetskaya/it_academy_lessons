import { Base } from '../pages/base.js'



class LoginPage extends Base {
    async inputData(locator, value) {
        const element = $(locator);
        await element.waitForDisplayed({ timeout: 3000 });
        await element.setValue(value);
    }
}


export { LoginPage };