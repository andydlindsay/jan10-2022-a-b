describe('tests for Cypress', () => {

  it('works?', () => {
    expect(true).to.equal(true);
  });

  it('can visit a webpage', () => {
    cy.visit('http://localhost:8765');
  });

});
