import loginPage from '../page-objects/authentication'

describe('Logining onto the platform', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('should login with a valid user', () => {
        loginPage.login('standard_user', 'secret_sauce')
        cy.url().should('contain', 'inventory')
        cy.get(loginPage.inventoryList).should('be.visible')


    })
    it('should not login with lockedOutUser', () => {
        loginPage.login('locked_out_user', 'secret_sauce')
        cy.get(loginPage.lockedOutUser).should('be.visible')
        cy.get(loginPage.lockedOutUser).should('have.text', 'Epic sadface: Sorry, this user has been locked out.')

    })
    it('should not login with an incorrect credentials', () => {
        loginPage.login('locked_out_user', '$ecret$auce')
        cy.get(loginPage.lockedOutUser).should('be.visible')
        cy.get(loginPage.lockedOutUser).should('have.text', 'Epic sadface: Username and password do not match any user in this service')


    })
})