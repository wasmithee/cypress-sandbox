describe('getByAlias', function () {
  beforeEach(function () {
    cy.visit('https://example.cypress.io/commands/querying')
  });

  it('Locator string embedded in test code', function () {
    cy.get('#query-btn')
      .should('contain', 'Button');
  });

  it('Locator string stored in consolidated location', function () {
    cy.setLocators(['queryButton'])
      .get('@queryButton')
      .should('contain', 'Button');
  });

  it('Command function that sets the locator string alias, gets the alias and returns teh correct subject to the test', function () {
    cy.getByAlias('queryButton')
      .should('contain', 'Button');
  });

});