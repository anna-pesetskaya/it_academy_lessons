import { Given, When, Then } from '@wdio/cucumber-framework';
import { LoginPage } from '../pages/loginPage';
import { expect } from '@wdio/globals';

const loginPage = new LoginPage();

const locators = {
    'Username Field': '#user_email',
    'Password Field': '#user_password',
    'Submit Button': 'input[type="submit"]',
    'User Button': '.t-avatar-menu',
    'Sign Out Button': '//a[text() = "Sign out"]',
    'Sign In Button': '.ht-btn--main-action',
    'Side Menu': '#ember18',
  };



Given(/^I navigate to (.*) page$/, async (url) => {
    await browser.url(url);
});


Then(/^the title should be "(.*)" $/, async (expectedTitle) => {
    const title = await browser.getTitle();
    if (title !== expectedTitle) {
        throw new Error(`Expected title to be "${expectedTitle}", but got "${title}"`);
    }
});


When(/^I input valid username "(.*)" into "(.*)" and password "(.*)" into "(.*)"$/, async (
    username,
    usernameLocator,
    password,
    passwordLocator,
) => {
   

    await loginPage.inputData(locators[usernameLocator], 'pesetskaya.anna@gmail.com');
    await loginPage.inputData(locators[passwordLocator], 'fhcYQ2106');
});

Then(/^I click on "(.*)" button$/, async (locatorName) => {
    await $(locators[locatorName]).waitForDisplayed();
    await $(locators[locatorName]).click();
});

Then(/^I should be redirected to the url that contains "(.*)" inside it$/, async (text) => {
    expect(await loginPage.isContainingInUrl(text)).toBe(true);
});

Then(/^I should see "(.*)"$/, async (locatorName) => {
    expect(await loginPage.isElementVisible(locators[locatorName])).toBe(true);
});