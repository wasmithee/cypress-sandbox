// Define locator string map
const locatorAliasMap = {
  'queryButton'    : '#query-btn'
};

/**
 * Set the desired locator alias(es)
 */
Cypress.addParentCommand('setLocators', (aliases) => {
  aliases.map(item => {
    cy.get(locatorAliasMap[item], {timeout: 20000}).as(item)
  });
});

/**
 * Set the desired locator and get the element
 * - This should return the correct subject back to the calling test
 */
Cypress.addParentCommand("getByAlias", (alias) => {
  cy.setLocators([alias])
    .get('@' + alias);
});