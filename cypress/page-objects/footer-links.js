class Links {

    get twitterFooter() {
        return ('a[href="https://twitter.com/saucelabs"]')
    }
    get facebookFooter() {
        return ('a[href="https://www.facebook.com/saucelabs"]')
    }
    get linkedInFooter() {
        return ('a[href="https://www.linkedin.com/company/sauce-labs/"]')
    }


    contactTwitter() {
        cy.get(this.twitterFooter).click()
    }
    contactFacebook() {
        cy.get(this.facebookFooter).click()
    }
    contactLinkedIn() {
        cy.get(this.linkedInFooter).click()
    }

}
export default new Links()