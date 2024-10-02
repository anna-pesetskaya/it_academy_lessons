const { Base } = require('./basePage');

class CartPage extends Base {
  constructor(page) {
    super(page);
  }
  get pageHeader() {
    return this.page.locator('//main//h1');
  }

  get devicesNamesFromCart() {
    return this.page.locator('//div[@class="review-item-main-card review-item-main-unrooted-card"]//span[@class = "link-label"]')
  }

  get devicesPricesFromCart() {
    return this.page.locator('//div[@class="card-page-review-wrapper"]//span[contains(@id, "full-price_")]')
  }

  get totalOrderCost() {
    return this.page.locator('//*[@id="card-total-price"]')
  }

  get sumToPay() {
    return this.page.locator('//*[@id="card-subtotal-price"]')
  }

  get addDeviceFromCartButton() {
    return this.page.locator ('//button[@class="quantity-selector-button--plus quantity-selector-button btn js-qty-selector-plus quantity-selector-card"]')
  }

  get deviceQuantityInCart() {
    return this.page.locator('//input[@class = "form-input quantity-selector-input js-qty-selector-input quantity-selector-card-input"]')
  }

  get removeFromCartButton() {
    return this.page.locator('//button[@aria-label="Удалить"]')
  }

  get removavInformationWindow() {
    return this.page.locator('//form[@id="modal-remove-group-1"]')
  }

  get confirmButton() {
    return this.page.locator('//button[@data-loader-id="global-loader"]')
  }

  get confirmationMessage() {
    return this.page.locator('//div[@class="text-block-content"]/p')
  }

  get goToEShopButton() {
    return this.page.locator('//span[contains(text(),"Перейти в интернет-магазин")]')
  }

   async removeDevicesFromCart() {
    await this.removeFromCartButton.click()
    await this.waitElementVisible(this.removavInformationWindow)
    await this.confirmButton.click()
    await this.waitElementVisible(this.confirmationMessage)
    await this.goToEShopButton.click()
  }

 
}
module.exports = CartPage;