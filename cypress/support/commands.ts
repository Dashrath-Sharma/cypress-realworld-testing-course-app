/// <reference types="cypress" />
// ***********************************************

Cypress.Commands.add("getByData", (selector) => {
    return cy.get(`[data-test=${selector}]`);
})

declare namespace Cypress {
    interface Chainable<Subject> {
       /**
        * @returns Chainable<JQuery<HTMLElement>>
        * This will get element
        * @param selector string
        **/
       getByData(selector: string): Chainable<JQuery<HTMLElement>>;
    }
}