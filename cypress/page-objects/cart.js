class cartPage {


    get cartItemTwo() {
        return ('#item_4_title_link')
    }
    get cartItemThree() {
        return ('#item_0_title_link')
    }
    get addCartButtonTwo() {
        return ('#add-to-cart-sauce-labs-backpack')
    }
    get addCartButtonThree() {
        return ('#add-to-cart-sauce-labs-bike-light')
    }
    get cartIcon() {
        return ('.shopping_cart_link')
    }
    get cartNumber() {
        return ('.shopping_cart_badge')
    }
    get cartQuantity() {
        return ('.cart_quantity')
    }

    get removeSauceLabsBackpackButton() {
        return ('#remove-sauce-labs-backpack')
    }
    get continueShoppingButton() {
        return ('#continue-shopping')
    }
    get checkOutButton() {
        return ('#checkout')
    }
    get firstName() {
        return ('#first-name')
    }
    get lastName() {
        return ('#last-name')
    }
    get zipCode() {
        return ('#postal-code')
    }
    get continueButton() {
        return ('#continue')
    }
    get itemDescriptionName() {
        return ('.inventory_item_name')
    }
    get itemQuantityNumber() {
        return ('.cart_quantity')
    }
    get finishButton() {
        return ('#finish')
    }
    get completeMessage() {
        return ('.title')
    }
    get thankYouMessage() {
        return ('.complete-header')
    }
    get backHomeButton() {
        return ('#back-to-products')
    }

    checkOut(firstName, lastName, zipCode) {
        cy.get(this.checkOutButton).should('be.visible')
        cy.get(this.checkOutButton).click()
        cy.get(this.firstName).type(firstName)
        cy.get(this.lastName).type(lastName)
        cy.get(this.zipCode).type(zipCode)
        cy.get(this.continueButton).should('be.visible')
        cy.get(this.continueButton).click()

    }
    completeCheckOut() {
        cy.get(this.finishButton).should('be.visible')
        cy.get(this.finishButton).click()
    }


    addCart() {
        cy.get(this.cartItemTwo).click()
        cy.get(this.addCartButtonTwo).click()
        cy.get(this.cartIcon).click()
    }
    addMultipleCartItems() {
        cy.get(this.addCartButtonTwo).click()
        cy.get(this.addCartButtonThree).click()
        cy.get(this.cartIcon).click()
    }

    continueShopping() {
        cy.get(this.continueShoppingButton).click()
    }

    navigateToCart() {
        cy.get(this.cartIcon).click()
    }
}
export default new cartPage()