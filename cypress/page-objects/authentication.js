class loginPage {
    //#region Selectors
    get userName() {
        return ('[type="text"]#user-name')
    }
    get passWord() {
        return ('#password')
    }
    get loginButton() {
        return ('#login-button')
    }
    get inventoryList() {
        return ('#inventory_container')
    }
    get lockedOutUser() {
        return ('h3[data-test= error]')
    }
    get mainMenuBtn() {
        return ('#react-burger-menu-btn')
    }
    get logOutBtn() {
        return ('#logout_sidebar_link')
    }
    get crossBtn() {
        return ('#react-burger-cross-btn')
    }
    //#endregion

    //#region Methods

    login(userName, passWord) {
        cy.get(this.userName).type(userName)
        cy.get(this.passWord).type(passWord)
        cy.get(this.loginButton).click()
    }
    logout() {
        cy.get(this.mainMenuBtn).click()
        cy.get(this.logOutBtn).click()
    }
    // #endregion
}
export default new loginPage()