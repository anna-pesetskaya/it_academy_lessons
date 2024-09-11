class CartPage {
    constructor() {}

    get cartButton() {
        return cy.get(':nth-child(3) > .n-item > .n-item__icon').wait(5000)
    }


    get cartPageHeader() {
        return cy.get('.section-part > .section-heading > .section-heading__title')
    }

    get cartPrice() {
        return cy.get('#card-product-cart-10880783 > .c-part-row > :nth-child(4) > .c-cost > .c-price')
    }

    get cartGoodName() {
        return cy.get('.c-part-row > :nth-child(2) > .c-text')
    }

    async checkCart() {
        await this.cartButton.should('be.visible').should('not.be.disabled');
        await this.cartButton.click()
        await this.cartPageHeader.should('be.visible')
        await this.cartPageHeader.should('have.text', 'Моя корзина')
        const cartGoodName = await this.cartGoodName.prop('text')
        const cartPrice = await this.cartPrice.prop('text')

        console.log(`Total sum in cart: ${cartPrice}`);
        console.log(`Good name in cart: ${cartGoodName}`);
      }
}
    


module.exports = new CartPage();
