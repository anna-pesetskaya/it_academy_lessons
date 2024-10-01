class GoodsPage {
    constructor() {}

    get tvButton() {
        return cy.get('[aria-label="11 / 26"] > .card-category').wait(10000)
    }
  
    get goodsPageHeader() {
      return cy.get('.section-heading__title.heading-page.ec-section-name').wait(10000)
    };
  
    get checkboxSamsung() {
        return cy.get('#filter-682897 > .filter-body > :nth-child(2) > .inp-box > .inp-box__label > .inp-box__view').wait(10000)
    }

    get totalSum() {
      return cy.get(':nth-child(1) > :nth-child(1) > .card-product-full > :nth-child(3) > .c-cost > .c-price').wait(10000)
    }

    get Name() {
      return cy.get(':nth-child(1) > :nth-child(1) > .card-product-full > :nth-child(2) > .c-text').wait(10000)
    }

    get addToCartButton() {
      return cy.get(':nth-child(1) > :nth-child(1) > .card-product-full > :nth-child(3) > .c-controls > .btn').wait(10000)
    }

    get goToCart() {
      return cy.get('[href="/cart"]').wait(5000)
  }
  
    async searchSamsungTv() {
      await this.tvButton.should('be.visible').should('not.be.disabled');
      await this.tvButton.click();
      await this.goodsPageHeader.should('be.visible');
      await this.goodsPageHeader.should('have.text', 'Телевизоры')
      await this.checkboxSamsung.should('be.visible').should('not.be.disabled');
      await this.checkboxSamsung.click();
      await this.goodsPageHeader.should('have.text', 'Телевизоры SAMSUNG')
        
    };
    
    async addToCart() {
      await this.totalSum.should('be.visible')
      const totalSum = await this.totalSum.prop('text')
      const goodName = await this.Name.prop('text')

      console.log(`Total sum in list: ${totalSum}`);
      console.log(`Good name in list: ${goodName}`);
      
      await this.goToCart.click()
    }
    
  }
  
  module.exports = new GoodsPage();