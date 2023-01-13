describe("Test e2e to dashboard page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get(`[data-cy="email-login"]`).type("ashketchum@pokedex.com");
    cy.get(`[data-cy="password-login"]`).type(123456789);
    cy.get(`[data-cy="button-login"]`).click();
  });

  it("The Pokemon Card fetch succesfully", () => {
    cy.url().should("include", "/dashboard");
    cy.wait(10000);
    cy.get(`[data-cy="pokemonCard"]`).should("not.have.length", 0);
    cy.get(`[data-cy="pokemonCardImg"]`).should("not.have.length", 0);
    cy.get(`[data-cy="pokemonCardWight"]`).should("not.have.length", 0);
    cy.get(`[data-cy="pokemonCardName"]`).should("not.have.length", 0);
    cy.get(`[data-cy="pokemonCardAbility"]`).should("not.have.length", 0);
    cy.get(`[data-cy="pokemonCard"]`).click({ multiple: true, force: true });

    cy.get(`[data-cy="pokemonCardModal"]`).should("not.have.length", 0);
  });
});
