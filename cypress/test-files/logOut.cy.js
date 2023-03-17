import loginPage from '../page-objects/authentication'

describe('Logining out of the platform', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('should logout a user that is signed in', () => {
        loginPage.login('standard_user', 'secret_sauce')
        cy.url().should('contain', 'inventory')
        cy.get(loginPage.inventoryList).should('be.visible')
        loginPage.logout()
        cy.url().should('contain', '/')


    })
    it('should not be able to logout a person who is not logged in', () => {
        loginPage.login('locked_out_user', 'secret_sauce')
        cy.get(loginPage.lockedOutUser).should('be.visible')
        cy.get(loginPage.lockedOutUser).should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
        cy.get(loginPage.mainMenuBtn).should('not.exist')

    })

})