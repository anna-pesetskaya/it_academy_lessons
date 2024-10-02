const { Base } = require('./basePage');


class SearchResultsPage extends Base {
  constructor(page) {
    super(page);
  }

  get searchResultField() {
    return this.page.locator('//h2[@class = "banner-info-title c-black banner-info-title-inside"]');
  }

  get errorMessage() {
    return this.page.locator('//main//div[@class="text-block-content"]/p');
  }

  get pageHeader() {
    return this.page.locator('//main//h1');
  }

  get productName() {
    return this.page.locator('//div[@class="product-listing-box "]//div[@class="product-search-item-title"]')
  }

   
  get elementsCards() {
    return this.page.locator('//div[@class="product-listing-item product-listing-search-result observable-element"]')
  }

  get elementWithPicture() {
    return this.page.locator('(//div[@class="global-search dropdown-menu"]//ul[contains(@class, "ui-autocomplete")]//a[@class="global-search-link"])[1]')
  }

  get buttonPurchase() {
    return this.page.locator('.product-listing-item-btn a')
  }

  get shortProductInformation() {
    return this.page.locator('span.product-short-info-name')
  }

  

  async setElementBySapCode(productCode) {
    return this.page.locator(`div[data-product-code="${productCode}"]`);
  } 




  async getProductSapCodeAndClickPurchaseButton() {
    const itemList = this.elementsCards;
    const count = await itemList.count();
    let productCode = null;

    for (let i = 0; i < count; i++) {
        const item = itemList.nth(i);
        const innerText = await item.innerText();
        if (innerText.includes('Перейти к покупке') && innerText.includes('руб')) {
            productCode = await item.getAttribute('data-product-code');
            await item.locator('.product-listing-item-btn a').click();
            break;  
        }
    }
    return productCode;  
}
  


}
  module.exports = SearchResultsPage;