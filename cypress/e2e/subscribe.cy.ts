describe("NewsLetter Subscribe Form", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it("allows users to subscribe to the email list", () => {
        // getByData is a custom function
        cy.getByData("email-input").type('dashrath9958@gmail.com')
        cy.getByData("submit-button").click()
        cy.getByData("success-message").should("exist").contains('dashrath9958@gmail.com')
    })

    it("If user enters an invalid email", () => {
        // getByData is a custom function
        cy.getByData("email-input").type('dashrath')
        cy.getByData("submit-button").click()
        cy.getByData("success-message").should("not.exist")
    })

    it("Should not allow already subscribed users to subscribe again", () => {
        cy.getByData("email-input").type("john@example.com")
        cy.getByData("submit-button").click()
        cy.getByData("server-error-message").should("exist").contains("already exists. Please use a different email address.")
    })
})