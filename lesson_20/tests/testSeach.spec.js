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
        await page.goto('https://www.a1.by/ru/');
        await page.waitForLoadState('networkidle'); 
        await mainPage.acceptCoockies();
        await mainPage.search('Драйв Актив');
        await mainPage.searchFirstResultAutosuggestion.waitFor({ state: 'visible', timeout: 10000 });
        await mainPage.searchFirstResultAutosuggestion.click();
        await searchResultsPage.waitSearchResults();
        await expect(searchResultsPage.headerResult).toHaveText('Драйв Актив');
    })

    test('should be error message when invalid data is passed into search field', async ({page}) => {
        await page.goto('https://www.a1.by/ru/');
        await page.waitForLoadState('networkidle'); 
        await mainPage.acceptCoockies();
        await mainPage.search('oirutoqiu');
        await mainPage.failedSearchResults.waitFor({ state: 'visible', timeout: 10000 });
        await expect(mainPage.failedSearchResults).toContainText('По запросу "oirutoqiu" ничего не найдено.');
    })
  })