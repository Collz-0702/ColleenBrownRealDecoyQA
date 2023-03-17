import loginPage from '../page-objects/authentication'
import Links from '../page-objects/footer-links'



describe('Sauce Labs Social Media Accounts', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('should be taken to Sauce Labs Twitter page', () => {
        loginPage.login('standard_user', 'secret_sauce')
        // clicked  on twitter button at the bottom of the page
        Links.contactTwitter()
        // checks that the sauce lab twitter link is found within the DOM
        cy.get(Links.twitterFooter).should('have.attr', 'href')

    })
    it('should be taken to Sauce Labs Facebook page', () => {
        loginPage.login('standard_user', 'secret_sauce')
        // clicked  on facebook button at the bottom of the page
        Links.contactFacebook()
        // checks that the sauce lab facebook link is found within the DOM
        cy.get(Links.facebookFooter).should('have.attr', 'href')

    })
    it('should be taken to Sauce Labs Linkedin page', () => {
        loginPage.login('standard_user', 'secret_sauce')
        // clicked  on Linkedin button at the bottom of the page
        Links.contactLinkedIn()
        // checks that the sauce lab linkedin link is found within the DOM
        cy.get(Links.linkedInFooter).should('have.attr', 'href')

    })

})