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
})