describe('Home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  // Test 1
  it('The h1 contains the correct text', () => {
    cy.get('[data-test="hero-heading"]').should('exist').contains('Testing Next.js Applications with Cypress')
  })
  // Test 2
  it.only('Revisit Home page', () => {
    cy.get('dt').eq(0).contains('4 Courses')
    cy.get('dt').eq(1).contains('25+ Lessons')
    cy.get('dt').eq(2).contains('Free and Open Source')

    // cy.get('dt').first().should('have.text','4 Courses')
    // .next().should('have.text','25+ Lessons')
    // .next().should('have.text','Free and Open Source')
  })

})