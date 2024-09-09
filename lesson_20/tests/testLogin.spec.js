const {test, expect} = require('@playwright/test');
const MainPage = require('../pages/mainPage')
const LoginPage = require('../pages/loginPage');


test.describe('A1.by authrorisation in personal accout', async function () {
    let mainPage;
    let loginPage;
  
    test.beforeEach(async ({page}) => {
      mainPage = new MainPage(page)
      loginPage = new LoginPage(page)
    })
  
    test('should enter into personal account with correct data', async ({page}) => {
        await page.goto('https://www.a1.by/ru/', { waitUntil: 'networkidle' });
        await mainPage.acceptCoockies();
        await mainPage.clickToAuthorise();
        await loginPage.login('445840923', "11111111Qq")
        await expect(mainPage.authState).toBeVisible();
    })

    test('should thow error when enter into personal account with incorrect password', async ({page}) => {
      await page.goto('https://www.a1.by/ru/', { waitUntil: 'networkidle' });
      await mainPage.acceptCoockies();
      await mainPage.clickToAuthorise();
      await loginPage.login('445840923', "22222222Qq")
      await expect (loginPage.errorMessage).toContainText('Неверный пароль или номер телефона');;
  })
})