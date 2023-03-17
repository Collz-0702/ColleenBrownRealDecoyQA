import loginPage from "../page-objects/authentication";
import productsInventory from "../page-objects/inventory";
import ProductsData from "../data-files/inventory-data";



describe('Inventory Page', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('should sort products from A-Z', () => {
        loginPage.login('standard_user', 'secret_sauce')
        ProductsData.products.sort()
        cy.get(productsInventory.cartItemName).each(($elem, index) => {
            expect($elem.text()).equal(ProductsData.products[index].name)
        })

    })
    it('should sort product prices from low to high', () => {
        loginPage.login('standard_user', 'secret_sauce')
        productsInventory.sortProducts(ProductsData.sort['Low to High'])
        ProductsData.products.sort((a, b) => a.price - b.price)
        cy.get(productsInventory.itemPrice).each(($elem, index) => {
            expect($elem.text()).equal(`$${ProductsData.products[index].price}`)
        })

    })

    it('should add Sauce Labs Bolt T-shirt from the product page', () => {
        loginPage.login('standard_user', 'secret_sauce')
        cy.get(loginPage.inventoryList).should('be.visible')

        productsInventory.addToCartFromProductPage()
        cy.get(productsInventory.removeSauceLabBoltButton).should('be.visible')
        productsInventory.navigateToCart()
        cy.get(productsInventory.cartItemName).should('have.text', 'Sauce Labs Bolt T-Shirt')

    })

    it('should remove Sauce Labs Bolt T-shirt from the product page', () => {
        loginPage.login('standard_user', 'secret_sauce')
        cy.get(loginPage.inventoryList).should('be.visible')

        productsInventory.removeItemFromProductPage()
        cy.get(productsInventory.addCartButton).should('be.visible')

        productsInventory.navigateToCart()
        cy.get(productsInventory.cartItemName).should('not.exist')

    })
    it('should not add an item that is already added to cart', () => {
        loginPage.login('standard_user', 'secret_sauce')
        cy.get(loginPage.inventoryList).should('be.visible')

        productsInventory.addToCartFromProductPage()
        cy.get(productsInventory.removeSauceLabBoltButton).should('be.visible')
        cy.get(productsInventory.addCartButton).should('not.exist')

    })

})