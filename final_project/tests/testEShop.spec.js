const {test, expect} = require('@playwright/test');
const MainPage = require('../pages/mainPage');
const SearchResultsPage = require('../pages/searchResultsPage');
const EShopPage = require('../pages/eShopPage.js');
const CartPage = require('../pages/cartPage.js');
const { getInnerTextsFromWebElements, parsePricesFromElements, convertStringToFloat } = require('../helpers/helpers.js');


const { url, testData } = require('../helpers/constants.js');


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
        await mainPage.openSmartphonesShop();
        await searchResultsPage.waitElementVisible(searchResultsPage.pageHeader);
        await eShopPage.selectRandomEShopItem()
    })
  
    

    test('should display purchase button when all required fields are filled', async ({page}) => {
        await eShopPage.fillBuyInOneClickFormAndCheckButtonAvailability(testData.fio, testData.phoneNumber, testData.contactEmail);
    })


    test('should display A1 shops list in non-transparent window', async ({page}) => {
        await eShopPage.checkShopsPageModalTransparency();
        })


    test('should open separate page when viewing eShops on the map', async ({page}) => {
        await eShopPage.clickOnStoresOnTheMapLink()
        expect(page.url()).toBe(url.shopsUrl);

    })

  
    test('should match device name and price between device card and cart', async ({page}) => {
        await eShopPage.clickForAllTab();

        const devicePriceFromDeviceCard = await parsePricesFromElements(eShopPage.devicePriceFromDeviceCard);
        const deviceNameFromDeviceCard= await getInnerTextsFromWebElements(searchResultsPage.pageHeader)

        await eShopPage.buyFullPriceButton.click()
        await expect(searchResultsPage.pageHeader).toHaveText('Корзина');

        const deviceNameFromCart = await getInnerTextsFromWebElements(cartPage.devicesNamesFromCart);
        const devicePriceFromCart = await parsePricesFromElements(cartPage.devicesPricesFromCart);
        const totalOrderCostFromCart = await parsePricesFromElements(cartPage.totalOrderCost);
        const sumToPayFromCart = await parsePricesFromElements(cartPage.sumToPay);

        expect(deviceNameFromDeviceCard[0]).toEqual(deviceNameFromCart[0]);
        expect(devicePriceFromDeviceCard).toEqual(devicePriceFromCart);
        expect(sumToPayFromCart).toEqual(totalOrderCostFromCart); 
    })


    test('should update cart totals correctly when increasing device quantity', async ({page}) => {
        await eShopPage.clickForAllTab();
        const devicePriceFromDeviceCard = await parsePricesFromElements(eShopPage.devicePriceFromDeviceCard);
        await eShopPage.buyFullPriceButton.click()
        await expect(searchResultsPage.pageHeader).toHaveText('Корзина');   
        await (cartPage.addDeviceFromCartButton).click()
        const quantityOfDevices = await cartPage.deviceQuantityInCart.inputValue();
        const devicePricesFromCart = await parsePricesFromElements(cartPage.devicesPricesFromCart);
        const totalOrderCostFromCart = await parsePricesFromElements(cartPage.totalOrderCost);
        const sumToPayFromCart = await parsePricesFromElements(cartPage.sumToPay);

        const devicePriceFromCart = Array.isArray(devicePricesFromCart) && devicePricesFromCart.length > 0
            ? devicePricesFromCart[0]
            : devicePricesFromCart;

        const expectedPrice = devicePriceFromDeviceCard * Number(quantityOfDevices);
        
        expect(Number(devicePriceFromCart)).toEqual(expectedPrice);
        expect(Number(sumToPayFromCart)).toEqual(Number(totalOrderCostFromCart));
        
    })


    test('should display empty cart when all devices are removed', async ({page}) => {
        await eShopPage.clickForAllTab();
        await eShopPage.buyFullPriceButton.click()
        await expect(searchResultsPage.pageHeader).toHaveText('Корзина');   
        await cartPage.removeDevicesFromCart()
        expect(page.url()).toBe(url.phonesUrl);
    })



    test('should correctly calculate total prices when multiple devices are added to the cart', async ({page}) => {
        const numberOfDevices = 2; 
        const devicePricesFromCart = []; 
        const deviceNamesFromCart = [];
            
        for (let i = 0; i < numberOfDevices; i++) {
            await eShopPage.clickForAllTab();
            const devicePriceFromDeviceCard = await parsePricesFromElements(eShopPage.devicePriceFromDeviceCard);
            const deviceNameFromDeviceCard = await getInnerTextsFromWebElements(searchResultsPage.pageHeader);
            await eShopPage.buyFullPriceButton.click();
            await expect(searchResultsPage.pageHeader).toHaveText('Корзина');
            devicePricesFromCart.push(...devicePriceFromDeviceCard);
            deviceNamesFromCart.push(...deviceNameFromDeviceCard);
            if (i < numberOfDevices - 1) { 
                await mainPage.openSmartphonesShop();
                await searchResultsPage.waitElementVisible(searchResultsPage.pageHeader);
                await eShopPage.selectRandomEShopItem();
            }
        }
    
        const deviceNameFromCart = await getInnerTextsFromWebElements(cartPage.devicesNamesFromCart);
        const totalOrderCostFromCartArray = await parsePricesFromElements(cartPage.totalOrderCost);
        const totalOrderCostFromCart = totalOrderCostFromCartArray[0]; 

        const sumToPayFromCartArray = await parsePricesFromElements(cartPage.sumToPay);
        const sumToPayFromCart = sumToPayFromCartArray[0];

    
        expect(deviceNameFromCart).toEqual(expect.arrayContaining(deviceNamesFromCart));
        expect(await parsePricesFromElements(cartPage.devicesPricesFromCart)).toEqual(expect.arrayContaining(devicePricesFromCart));
    
        const totalExpectedCost = devicePricesFromCart.reduce((acc, price) => acc + price, 0); 
        expect(totalOrderCostFromCart).toEqual(totalExpectedCost);
        expect(totalExpectedCost).toEqual(sumToPayFromCart);   
        
    })

   
})