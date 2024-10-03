const {test, expect} = require('@playwright/test');
const MainPage = require('../pages/mainPage.js');
const SearchResultsPage = require('../pages/searchResultsPage.js');
const EShopPage = require('../pages/eShopPage.js');
const CartPage = require('../pages/cartPage.js');

const { url, testData } = require('../helpers/constants.js');


test.describe('handle subscription and unsubscription from A1 news', async function () {
  let mainPage;
  let searchResultsPage;
  let eShopPage;
  let cartPage;

  test.beforeEach(async ({page}) => {
    mainPage = new MainPage(page);
    searchResultsPage = new SearchResultsPage(page);
    eShopPage = new EShopPage(page);
    cartPage = new CartPage(page);

    await page.goto(url.baseUrl), { waitUntil: 'networkidle' };
    await mainPage.acceptCoockies();
  })

    
  

  test('should allow user to subscribe and unsubscribe from A1 newsletter', async ({page}) => {
    await mainPage.subscribeToNewsletter(testData.subscriptionEmail);
    await mainPage.verifyPopupInfo("Вы подписались", "Вы успешно подписались на нашу новостную рассылку.")
    await page.goto(testData.unsubscribeUrl), { waitUntil: 'networkidle' };
    await mainPage.confirmNewsletterUnsubscribe("Отмена подписки на новости и акции компании");
    await mainPage.verifyPopupInfo("Вы отписались", "Вы успешно отписались от нашей новостной рассылки.");
    expect(page.url()).toBe(url.companyUrl);
  })



})