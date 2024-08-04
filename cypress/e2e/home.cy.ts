describe('Home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  
  // Hero Section Context Starts Here
  context("Hero Section", () => {
    // Test 1
    it('The h1 contains the correct text', () => {
      cy.get('[data-test="hero-heading"]').should('exist').contains('Testing Next.js Applications with Cypress')
    })
    // Test 2
    it('Revisit Home page', () => {
      cy.get('dt').eq(0).contains('4 Courses')
      cy.get('dt').eq(1).contains('25+ Lessons')
      cy.get('dt').eq(2).contains('Free and Open Source')
    })
  })
  // Hero Section Context Ends Here


  // Courses Section Context Starts Here
  context("Courses Section", () => {
    it('Course: Testing your First Next.js Application', () => {
      cy.getByData('course-0').find("a").eq(3).click()
      cy.location("pathname").should("eq","/testing-your-first-application")
    })
    it('Course: Testing your First Next.js Application', () => {
      cy.getByData('course-1').find("a").eq(3).click()
      cy.location("pathname").should("eq","/testing-foundations")
    })
    it('Course: Testing your First Next.js Application', () => {
      cy.getByData('course-2').find("a").eq(3).click()
      cy.location("pathname").should("eq","/cypress-fundamentals")
    })
  })

})