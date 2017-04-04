import{getLocator as l} from "../support/commands.js";

describe('Locator String Map Example', function () {
  beforeEach(function () {
    cy.visit('https://example.cypress.io/commands/querying')
  });

  it('Locator string stored in consolidated location', function () {
    cy.get(l('queryButton'))
      .should('contain', 'Button');
  });

});