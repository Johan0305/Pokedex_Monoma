describe("Test e2e to login page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("The page is render succesfully the components", () => {
    cy.get(`[data-cy="button-login"]`).should("have.length", 1);
    cy.get(`[data-cy="PokeImg-login"]`).should("have.length", 1);
    cy.get(`[data-cy="email-login"]`).should("have.length", 1);
    cy.get(`[data-cy="password-login"]`).should("have.length", 1);
  });

  it("Login with incorrect credentials", () => {
    cy.get(`[data-cy="email-login"]`).type("johansora@pokedex.com");
    cy.get(`[data-cy="password-login"]`).type(222223334);
    cy.get(`[data-cy="button-login"]`).click();
    cy.contains("An error has occurred, verify your username and password");
  });

  it("Login with correct credentials", () => {
    cy.get(`[data-cy="email-login"]`).type("ashketchum@pokedex.com");
    cy.get(`[data-cy="password-login"]`).type(123456789);
    cy.get(`[data-cy="button-login"]`).click();
    cy.contains("Signed in successfully");
  });
});
