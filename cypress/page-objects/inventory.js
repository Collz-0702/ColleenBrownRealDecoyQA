class productsInventory {

    get sortSelectorButton() {
        return ('.product_sort_container')
    }
    get cartItemName() {
        return ('.inventory_item_name')
    }
    get itemPrice() {
        return ('.inventory_item_price')
    }
    get addCartButton() {
        return ('#add-to-cart-sauce-labs-bolt-t-shirt')
    }
    get cartItem() {
        return ('#item_1_title_link')
    }
    get removeSauceLabBoltButton() {
        return ('#remove-sauce-labs-bolt-t-shirt')
    }
    get cartIcon() {
        return ('.shopping_cart_link')
    }


    sortProducts(sort) {
        cy.get(this.sortSelectorButton).select(sort)
    }
    addToCartFromProductPage() {
        cy.get(this.cartItem).click()
        cy.get(this.addCartButton).click()
    }
    removeItemFromProductPage() {
        cy.get(this.addCartButton).click()
        cy.get(this.removeSauceLabBoltButton).click()
    }
    navigateToCart() {
        cy.get(this.cartIcon).click()
    }

}
export default new productsInventory()