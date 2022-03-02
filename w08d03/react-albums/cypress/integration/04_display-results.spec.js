it('can display results from an API request', () => {
  // visit the homepage
  cy.visit('/');

  // tell Cypress to intercept the request and respond with our fake data
  cy.intercept('GET', '**/search*', { fixture: 'itunes' })
    .as('itunesRequest')

  // find the input field and type "Daft Punk"
  cy.get('.search__form')
    .find('input')
    .type('Daft Punk')
    .should('have.value', 'Daft Punk');

  // check to see if the spinner is visible
  cy.get('.spinner')
    .should('be.visible');

  // tell cypress to wait before continuing
  cy.wait('@itunesRequest');

  // check for a particular album
  cy.get('main')
    .contains('Random Access Memories')
    .should('be.visible');

  // uncheck the explicit checkbox
  cy.get('#Explicit')
    .uncheck();

  // check that the explicit album is no longer displayed
  cy.get('article.album')
    .should('not.contain', 'Daft Club');
});
