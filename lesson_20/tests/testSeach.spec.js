const {test, expect} = require('@playwright/test');
const MainPage = require('../pages/mainPage')
const SearchResultsPage = require('../pages/searchResultsPage')


test.describe('A1.by search test', async function () {
    let mainPage;
    let searchResultsPage;
  
    test.beforeEach(async ({page}) => {
      mainPage = new MainPage(page)
      searchResultsPage = new SearchResultsPage(page)
    })
  
    test('should be valid search results', async ({page}) => {
        await page.goto('https://www.a1.by/ru/', { waitUntil: 'networkidle' });
        await mainPage.acceptCoockies();
        await mainPage.search('Драйв Актив');
        await mainPage.waitAndClickFirstResult();
        await expect (searchResultsPage.searchResultField).toHaveText('Драйв Актив');
    })

    test('should be error message when invalid data is passed into search field', async ({page}) => {
        await page.goto('https://www.a1.by/ru/');
        await page.waitForLoadState('networkidle'); 
        await mainPage.acceptCoockies();
        await mainPage.search('oirutoqiu');
        await expect(mainPage.failedSearchResults).toContainText('По запросу "oirutoqiu" ничего не найдено.');
    })
  })