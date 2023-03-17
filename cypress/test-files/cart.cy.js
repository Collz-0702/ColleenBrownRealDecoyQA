import cartPage from '../page-objects/cart.js'
import loginPage from '../page-objects/authentication'
import productsInventory from '../page-objects/inventory'



describe('Cart Page', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('should add Sauce Labs Bolt T-shirt item to cart', () => {
        loginPage.login('standard_user', 'secret_sauce')
        cy.get(loginPage.inventoryList).should('be.visible')
        cartPage.addCart()
        cy.get(cartPage.cartNumber).should('have.text', 1)
        cy.get(cartPage.removeSauceLabsBackpackButton).should('be.visible')
        cy.get(productsInventory.cartItemName).should('have.text', 'Sauce Labs Backpack')
        cy.get(cartPage.cartQuantity).should('have.text', 1)

    })

    it('should add more than one items to cart', () => {
        loginPage.login('standard_user', 'secret_sauce')
        cy.get(loginPage.inventoryList).should('be.visible')
        cartPage.addMultipleCartItems()
        cy.get(cartPage.cartNumber).should('have.text', 2)
        cy.get(productsInventory.cartItemName).should('have.text', 'Sauce Labs BackpackSauce Labs Bike Light')

    })

    it('should be able to checkout cart', () => {
        loginPage.login('standard_user', 'secret_sauce')
        cy.get(loginPage.inventoryList).should('be.visible')
        cartPage.addMultipleCartItems()
        cy.get(cartPage.cartNumber).should('have.text', 2)
        cy.get(productsInventory.cartItemName).should('have.text', 'Sauce Labs BackpackSauce Labs Bike Light')
        cartPage.checkOut('Colleen', 'Williams', '00000')
        cy.get(cartPage.itemDescriptionName).should('have.text', 'Sauce Labs BackpackSauce Labs Bike Light')
        cy.get(productsInventory.itemPrice).should('have.text', '$29.99$9.99')
        cartPage.completeCheckOut()
        cy.get(cartPage.completeMessage).should('have.text', 'Checkout: Complete!')
        cy.get(cartPage.thankYouMessage).should('have.text', 'THANK YOU FOR YOUR ORDER')
        cy.get(cartPage.backHomeButton).should('be.visible')
        cy.get(cartPage.backHomeButton).click()
        cy.url().should('contain', 'inventory')
        productsInventory.navigateToCart()
        cy.get(productsInventory.cartItemName).should('not.exist')

    })

    it('should be able to continue shopping from cart', () => {
        loginPage.login('standard_user', 'secret_sauce')
        cy.get(loginPage.inventoryList).should('be.visible')
        cartPage.addCart()
        cy.get(cartPage.cartNumber).should('have.text', 1)
        cy.get(cartPage.removeSauceLabsBackpackButton).should('be.visible')
        cy.get(productsInventory.cartItemName).should('have.text', 'Sauce Labs Backpack')
        cartPage.continueShopping()
        cy.get(loginPage.inventoryList).should('be.visible')
    })

})
