describe('Home', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('has the correct title', () => {
    cy.title().should('equal', 'React App')
  })
})
