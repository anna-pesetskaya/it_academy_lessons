const {test, expect} = require('@playwright/test');
const MainPage = require('../pages/mainPage.js');
const SearchResultsPage = require('../pages/searchResultsPage.js');
const EShopPage = require('../pages/eShopPage.js');
const CartPage = require('../pages/cartPage.js');




const { url } = require('../helpers/constants.js');


test.describe('A1.by EShop tests', async function () {
    let mainPage;
    let searchResultsPage;
    let eShopPage;
    let cartPage;
  
    test.beforeEach(async ({page}) => {
      mainPage = new MainPage(page)
      searchResultsPage = new SearchResultsPage(page)
      eShopPage = new EShopPage(page)
      cartPage = new CartPage(page)

      await page.goto(url.baseUrl), { waitUntil: 'networkidle' };
      await mainPage.acceptCoockies();
    })
  
    test('should be filtered results according to chosen filter', async ({page}) => {
        await mainPage.openSmartphonesShop();
        await searchResultsPage.waitElementVisible(searchResultsPage.pageHeader);
        await eShopPage.checkDiscountLabelsOnFilteredProducts();
    })

    
    test('should be correct filtering in the list of A1 shops where to buy a device', async ({page}) => {
        let townName = ''
        await mainPage.openSmartphonesShop();
        await searchResultsPage.waitElementVisible(searchResultsPage.pageHeader);
        await eShopPage.selectRandomEShopItem()
        await eShopPage.clickShopListOnAvailabilityInShopsPage()
        townName = await eShopPage.clickAndGetRandomTownName()
        await eShopPage.checkTownNameInShopAddresses(townName)
    })

  

    test('should be valid filtering with device prices', async ({page}) => {
        await mainPage.openSmartphonesShop();
        await searchResultsPage.waitElementVisible(searchResultsPage.pageHeader);
        await eShopPage.setAndVerifyMaxPriceFilter('300,00')
    })

  



})