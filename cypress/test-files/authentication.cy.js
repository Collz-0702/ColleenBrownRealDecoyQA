import loginPage from '../page-objects/authentication'

describe('Logining onto the platform', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('should login with a valid user', () => {
        // logs in user using valid credentials and login method
        loginPage.login('standard_user', 'secret_sauce')
        // asserts user has been logged in
        cy.url().should('contain', 'inventory')
        cy.get(loginPage.inventoryList).should('be.visible')


    })
    it('should not login with lockedOutUser', () => {
        // attempts to log in a locked out user with login method
        loginPage.login('locked_out_user', 'secret_sauce')
        // asserts that the user was not logged in
        cy.get(loginPage.lockedOutUser).should('be.visible')
        cy.get(loginPage.lockedOutUser).should('have.text', 'Epic sadface: Sorry, this user has been locked out.')

    })
    it('should not login with an incorrect credentials', () => {
        // attempts to log in a user with invalid credentials with login method
        loginPage.login('locked_out_user', '$ecret$auce')
        // asserts that the user was unable to login
        cy.get(loginPage.lockedOutUser).should('be.visible')
        cy.get(loginPage.lockedOutUser).should('have.text', 'Epic sadface: Username and password do not match any user in this service')


    })
})