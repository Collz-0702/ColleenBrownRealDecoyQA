import loginPage from "../page-objects/authentication";
import productsInventory from "../page-objects/inventory";
import ProductsData from "../data-files/inventory-data";



describe('Inventory Page', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('should sort products from A-Z', () => {

        // user logs in with valid credentials
        loginPage.login('standard_user', 'secret_sauce')

        // products on inventory page are sorted in alphabetical order(A-Z)
        ProductsData.products.sort()
        cy.get(productsInventory.cartItemName).each(($elem, index) => {
            expect($elem.text()).equal(ProductsData.products[index].name)
        })

    })
    it('should sort product prices from low to high', () => {

        // user logs in with valid credentials
        loginPage.login('standard_user', 'secret_sauce')

        // products on inventory page are sorted by price from low to high
        productsInventory.sortProducts(ProductsData.sort['Low to High'])
        ProductsData.products.sort((a, b) => a.price - b.price)
        cy.get(productsInventory.itemPrice).each(($elem, index) => {
            expect($elem.text()).equal(`$${ProductsData.products[index].price}`)
        })

    })

    it('should add Sauce Labs Bolt T-shirt from the product page', () => {

        // user logs in with valid credentials
        loginPage.login('standard_user', 'secret_sauce')
        cy.get(loginPage.inventoryList).should('be.visible')

        // product is added to the cart from the inventory page
        productsInventory.addToCartFromProductPage()
        cy.get(productsInventory.removeSauceLabBoltButton).should('be.visible')
        productsInventory.navigateToCart()
        cy.get(productsInventory.cartItemName).should('have.text', 'Sauce Labs Bolt T-Shirt')

    })

    it('should remove Sauce Labs Bolt T-shirt from the product page', () => {

        // user logs in with valid credentials
        loginPage.login('standard_user', 'secret_sauce')
        cy.get(loginPage.inventoryList).should('be.visible')

        // item is removed from the cart from the inventory page
        productsInventory.removeItemFromProductPage()
        cy.get(productsInventory.addCartButton).should('be.visible')

        productsInventory.navigateToCart()
        cy.get(productsInventory.cartItemName).should('not.exist')

    })
    it('should not add an item that is already added to cart', () => {

        // user logs in with valid credentials
        loginPage.login('standard_user', 'secret_sauce')
        cy.get(loginPage.inventoryList).should('be.visible')

        // item that is added to cart from inventory page cannot be added again to the cart
        productsInventory.addToCartFromProductPage()
        cy.get(productsInventory.removeSauceLabBoltButton).should('be.visible')
        cy.get(productsInventory.addCartButton).should('not.exist')

    })

})