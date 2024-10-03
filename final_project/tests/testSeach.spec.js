const {test, expect} = require('@playwright/test');
const MainPage = require('../pages/mainPage')
const SearchResultsPage = require('../pages/searchResultsPage')
const {getRandomKeyFromDictionary} = require('../helpers/utils.js');
const { url, testData, phoneModelsLanguageVariants, links } = require('../helpers/constants.js');



test.describe('A1.by search test', async function () {
    let mainPage;
    let searchResultsPage;
  
    test.beforeEach(async ({page}) => {
      mainPage = new MainPage(page)
      searchResultsPage = new SearchResultsPage(page)
      await page.goto(url.baseUrl), { waitUntil: 'networkidle' };
      await mainPage.acceptCoockies()
    })
  
    test('should return valid search results for a known valid search value', async ({page}) => {
        await mainPage.searchForValue(testData.validSearchValue);
        await mainPage.selectFirstSearchResult();
        await expect (searchResultsPage.searchResultField).toHaveText(testData.validSearchValue);
    })

    test('should display error message for invalid search input', async ({page}) => {
        await mainPage.searchForValue(testData.invalidSearchValue);
        await expect(mainPage.failedSearchResults).toHaveText(`По запросу "${testData.invalidSearchValue}" ничего не найдено.`);
    })
    

    test('should return correct search results for popular phone models in Russian', async ({page}) => {
        const randomKey = getRandomKeyFromDictionary(phoneModelsLanguageVariants);
        await mainPage.searchForValue(randomKey);
        await mainPage.searchField.press('Enter');
        await searchResultsPage.waitElementVisible(searchResultsPage.pageHeader);
        await expect (searchResultsPage.pageHeader).toHaveText(`Результаты поиска для «${randomKey}»`)
        expect(decodeURIComponent(page.url())).toContain(randomKey);
    })

    test('should return correct search results for SAP code', async ({page}) => {
        await mainPage.openSmartphonesShop();
        await searchResultsPage.waitElementVisible(searchResultsPage.pageHeader);
        await expect(searchResultsPage.pageHeader).toHaveText('Смартфоны');
        const productCode = await searchResultsPage.getProductSapCodeAndClickPurchaseButton();
        await mainPage.searchForValue(productCode);
        await mainPage.searchField.press('Enter');
        await searchResultsPage.waitElementVisible(searchResultsPage.pageHeader);
        await expect(searchResultsPage.pageHeader).toHaveText(`Результаты поиска для «${productCode}»`);
        const element = await searchResultsPage.setElementBySapCode(productCode);
        const isElementPresent = await element.count();
        expect(isElementPresent).toBeGreaterThan(0);
    })

    test('should navigate to correct pages when main links are clicked', async ({page}) => {
        await mainPage.verifyMainPageLinks(links);
    })



  })