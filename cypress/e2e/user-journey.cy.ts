describe("User Journey of taking a course", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    });

    context("Course-0 User Courney", () => {
        it("User Visits the page and takes a course", () => {
            cy.getByData("course-0").find("a").eq(3).click();
            cy.location("pathname").should("eq","/testing-your-first-application");
            cy.getByData("next-lesson-button").click();
            cy.location("pathname").should("eq","/testing-your-first-application/app-install-and-overview");
            cy.getByData("challenge-answer-0").check();
            cy.getByData("next-lesson-button").should("exist").click();
            cy.location("pathname").should("eq","/testing-your-first-application/installing-cypress-and-writing-our-first-test");
            cy.getByData("challenge-answer-0").check();
            cy.getByData("next-lesson-button").should("exist").click();
            cy.location("pathname").should("eq","/testing-your-first-application/setting-up-data-before-each-test");
            cy.getByData("challenge-answer-0").check();
            cy.getByData("next-lesson-button").should("exist").click();
            cy.location("pathname").should("eq","/");
        })
    })

    context("Course-1 User Courney", () => {
        it("User Visits the page and takes a course", () => {
            cy.getByData("course-1").find("a").eq(3).click();
            cy.location("pathname").should("eq","/testing-foundations");
            cy.getByData("next-lesson-button").click();
            cy.location("pathname").should("eq","/testing-foundations/testing-is-a-mindset");
            cy.getByData("challenge-answer-0").check();
            cy.getByData("next-lesson-button").should("exist").click();
            cy.location("pathname").should("eq","/testing-foundations/knowing-what-to-test");
            cy.getByData("challenge-answer-0").check();
            cy.getByData("next-lesson-button").should("exist").click();
            cy.location("pathname").should("eq","/testing-foundations/manual-vs-automated-testing");
            cy.getByData("challenge-answer-0").check();
            cy.getByData("next-lesson-button").should("exist").click();
            cy.location("pathname").should("eq","/");
        })
    })

    context("Course-2 User Courney", () => {
        it("User Visits the page and takes a course", () => {
            cy.getByData("course-2").find("a").eq(3).click();
            cy.location("pathname").should("eq","/cypress-fundamentals");
            cy.getByData("next-lesson-button").click();
            cy.location("pathname").should("eq","/cypress-fundamentals/how-to-write-a-test");
            cy.getByData("challenge-answer-0").check();
            cy.getByData("next-lesson-button").should("exist").click();
            cy.location("pathname").should("eq","/cypress-fundamentals/cypress-runs-in-the-browser");
            cy.getByData("challenge-answer-0").check();
            cy.getByData("next-lesson-button").should("exist").click();
            cy.location("pathname").should("eq","/cypress-fundamentals/command-chaining");
            cy.getByData("challenge-answer-0").check();
            cy.getByData("next-lesson-button").should("exist").click();
            cy.location("pathname").should("eq","/");
        })
    })
})