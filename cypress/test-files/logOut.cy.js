import loginPage from '../page-objects/authentication'

describe('Logining out of the platform', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('should logout a user that is signed in', () => {

        // user logs on with valid credentails
        loginPage.login('standard_user', 'secret_sauce')
        cy.url().should('contain', 'inventory')
        cy.get(loginPage.inventoryList).should('be.visible')

        // user logs out
        loginPage.logout()
        cy.url().should('contain', '/')


    })
    it('should not be able to logout a person who is not logged in', () => {

        // user attempts to login
        loginPage.login('locked_out_user', 'secret_sauce')
        cy.get(loginPage.lockedOutUser).should('be.visible')

        // assert user is not logged in so user cannot logout
        cy.get(loginPage.lockedOutUser).should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
        cy.get(loginPage.mainMenuBtn).should('not.exist')

    })

})