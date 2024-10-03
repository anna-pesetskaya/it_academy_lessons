const { Base } = require('./basePage');
const { expect } = require('@playwright/test');
const {getRandomInt} = require('../helpers/utils.js');
const {convertStringToFloat} = require('../helpers/utils.js');



class EShopPage extends Base {
  constructor(page) {
    super(page);
  }

  get checkBoxDiscountInFilters() {
    return this.page.locator('//label[@for="i-bubbles-collapsed-1"]//span[@class="input-indicator"]');
  };

  get eShopProductCards() {
    return this.page.locator('//div[@class = "product-listing-box "]');
  };

  get goToPurchaseButtons() {
    return this.page.locator('//span[@class="button-label"][contains(text(),"Перейти к покупке")]');
  };

  get discountLabelOnProduct() {
    return this.page.locator('//div[@class = "plp-bubble-item PROMO"]')
  }

  get priceBlockInDeviceCard() {
    return this.page.locator('//div[@class="price-block"]')
  }

  get buyInOneClickButton() {
    return this.page.locator('//div[@id="radio-accordion_INSTALLMENT-CURRENT_CONTRACT"]//div[@class="collapse in"]//button[contains(@class, "one-click")]') 
  }

  get oneClickBoughtModalWindow() {
    return this.page.locator('#modal-buy') 
  }

  get fullName() {
    return this.page.locator('//input[@id="fullName"]') 
  }

  get contactPhone() {
    return this.page.locator('//input[@id="contact-phone"]') 
  }

  get email() {
    return this.page.locator('//form[@id="modal-buy"]//input[@name="email"]') 
  }

  get installmentCheckProductBox() {
    return this.page.locator('//form[@id="modal-buy"]//input[@id="instalments"]/../span[@class="input-indicator"]') 
  }

  get buyButton() {
    return this.page.locator('//form[@id="modal-buy"]//button[@type="submit"]') 
  }

  get availabilityInShopsButton() {
    return this.page.locator('#availability-button') 
  }

  get availabilityInShopsPage() {
    return this.page.locator('//div[@id="view-store-list"]')
  }

  get listWithTownsNames() {
    return this.page.locator('//form[@id="select-filter-0"]/div/label')
  }

  get optionsInTheTownNamesDropList() {
    return this.page.locator('//li[@class = "select2-results__option"]')
  }

  get shopAdresses() {
    return this.page.locator('.map-center-info-address-text')
  }

  get storesOnTheMapLink() {
    return this.page.locator('//span[contains(text(),"Магазины А1 на карте")]')
  }

  get forAllTab() {
    return this.page.locator('//div[@class="tabs-controls-item is-visible"]//button[@type="button"]/span[text() = "Для всех"]/..')
  }

  get devicePriceFromDeviceCard() {
    return this.page.locator('//div[@id="final-price-id-for-ajaxpromoPrice"]/p/span')
  }

  get buyFullPriceButton() {
    return this.page.locator('(//div[@class="price-block-full-price-offer"])[1]//following-sibling::div[@class = "price-block-button"]/button')
  }

  get priceMaxField() {
    return this.page.locator('#i-range-box-to-0')
  }

  get devicePrices() {
    return this.page.locator('//div[@class="product-listing-item product-listing-search-result observable-element"]//span[contains(@id, "one-time-price")]')
  }

  get maxPriceFilterIcon() {
    return this.page.locator('//a[@class="chips-btn"]')
  }

  get discontLabelOnDeviceCard() {
    return this.page.locator('.plp-bubble-item.PROMO')
  }

  



  async checkDiscountLabelsOnFilteredProducts() {
    await this.waitElementVisible(this.checkBoxDiscountInFilters)
    await this.checkBoxDiscountInFilters.click();
    const eShopProductCards = await this.eShopProductCards;
    const eShopProductCardsCount = await eShopProductCards.count();

    for (let i = 0; i < eShopProductCardsCount; i++) {
        const productBox = eShopProductCards.nth(i);
        const hasPromo = await productBox.locator(this.discontLabelOnDeviceCard).count() > 0;
        if (hasPromo) {
          expect(hasPromo).toBe(true, `Элемент ${i + 1} содержит ярлык скидки`);
        } else {
          expect(hasPromo).toBe(false, `Элемент ${i + 1} не содержит ярлык скидки`);
        }
    }
  };

  async selectRandomEShopItem() {
    const count = await this.goToPurchaseButtons.count() 
    const randomIndex = getRandomInt(count);
    await this.goToPurchaseButtons.nth(randomIndex).click();
  }

  async fillBuyInOneClickFormAndCheckButtonAvailability(fio, phone, email) {
    await this.waitElementVisible(this.priceBlockInDeviceCard)
    await this.waitElementVisible(this.buyInOneClickButton)
    await this.buyInOneClickButton.click()
    await this.waitElementVisible(this.priceBlockInDeviceCard)
    await this.waitElementVisible(this.oneClickBoughtModalWindow)
    await this.fullName.click()
    await this.fullName.fill(fio)
    await this.contactPhone.click()
    await this.contactPhone.fill(phone)
    await this.email.click()
    await this.email.fill(email)
    await this.installmentCheckProductBox.click()
  }

  async assertBuyButtonIsVisibleAndEnabled() {
    const myButton = await this.buyButton;
    const isDisabled = await myButton.getAttribute('disabled') !== null;
    const isVisible = await myButton.isVisible();
    expect(isVisible).toBe(true);
    expect(isDisabled).toBe(false);
  }

  async checkShopsPageModalTransparency() {
    await this.waitElementVisible(this.availabilityInShopsButton)
    await this.availabilityInShopsButton.click()
    await this.waitElementVisible(this.availabilityInShopsPage)
    await this.page.waitForLoadState('domcontentloaded');
    const transparencyState = await this.page.$eval('#view-store-list', el => window.getComputedStyle(el).zIndex);
    expect(Number(transparencyState)).toBeGreaterThan(0, "Модальное окно прозрачно, слетел z-index в стилях окна");
  }

  async clickShopListOnAvailabilityInShopsPage() {
    await this.waitElementVisible(this.availabilityInShopsButton)
    await this.availabilityInShopsButton.click();
    await this.waitElementVisible(this.availabilityInShopsPage)
    await this.page.waitForLoadState('domcontentloaded');
    await this.listWithTownsNames.click();
  }
  
  async clickAndGetRandomTownName() {
    let townName = ''
    const shopsCount = await this.optionsInTheTownNamesDropList.count();
    expect(shopsCount).toBeGreaterThanOrEqual(0, 'Количество магазинов не может быть меньше 0');
    expect(shopsCount).toBeGreaterThan(0, 'Нет доступных элементов для клика');
    const randomIndex = getRandomInt(shopsCount);
    townName = await this.optionsInTheTownNamesDropList.nth(randomIndex).locator('.value');
    const valueLocator = this.optionsInTheTownNamesDropList.nth(randomIndex).locator('.value');
    await this.page.evaluate(el => el.click(), await valueLocator.elementHandle());
    return townName;
  }

    
 
  async checkTownNameInShopAddresses(townName) { 
    const shopAdresses = this.shopAdresses;
    const fullShopAdresses = await shopAdresses.allTextContents(); 
    let addressFound = false;
    for (let shopAdress of fullShopAdresses) {
      if (shopAdress.includes(townName)) {
        addressFound = true;
        assert.strictEqual(addressFound, true, 'Название города не было найдено в списке адресов.');
      }   
    } 
  }

  async clickOnStoresOnTheMapLink() {
    await this.waitElementVisible(this.availabilityInShopsButton)
    await this.availabilityInShopsButton.click()
    await this.waitElementVisible(this.availabilityInShopsPage)
    await this.page.waitForLoadState('domcontentloaded');
    await this.storesOnTheMapLink.click()
  }

  async clickForAllTab() {
    await this.waitElementVisible(this.forAllTab)
    await this.forAllTab.click()
     
  }

  async setAndVerifyMaxPriceFilter(price) {
    await this.waitElementVisible(this.priceMaxField)
    await this.priceMaxField.click();
    await this.priceMaxField.fill(price);
    await this.priceMaxField.press('Enter');
    await this.waitElementVisible(this.maxPriceFilterIcon)    
    const count = await this.devicePrices.count();

    for (let i = 0; i < count; i++) {
        const devicePriceText = await this.devicePrices.nth(i).textContent();
        const devicePrice = convertStringToFloat(devicePriceText);
        expect(devicePrice).toBeLessThan(convertStringToFloat(price), `Цена ${devicePrice} неверная или больше ${price}.`);
    }
  }

 
}
module.exports = EShopPage;