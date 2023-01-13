describe("Test e2e to dashboard page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get(`[data-cy="email-login"]`).type("ashketchum@pokedex.com");
    cy.get(`[data-cy="password-login"]`).type(123456789);
    cy.get(`[data-cy="button-login"]`).click();
  });

  it("The page is render succesfully the texts", () => {
    cy.url().should("include", "/dashboard");
    cy.contains("¡WELCOME TO YOUR POKEDEX!");
    cy.contains("Ash Ketchum");
  });

  it("The page is render succesfully the components", () => {
    cy.url().should("include", "/dashboard");
    cy.get(`[data-cy="pokemongoImg"]`).should("have.length", 1);
    cy.get(`[data-cy="userMenuDrop"]`).should("have.length", 1);
    cy.get(`[data-cy="layout"]`).should("have.length", 1);
    cy.get(`[data-cy="logoImgPokemonsMasters"]`).should("have.length", 1);
  });

  it("The page is succesfully logout", () => {
    cy.url().should("include", "/dashboard");
    cy.get(`[data-cy="userMenuDrop"]`).click();
    cy.contains("View Profile");
    cy.contains("Log Out");
    cy.get(`[data-cy="userLogOut"]`).click();
    cy.url().should("include", "/");
  });

  it("Modal user information is succesfully", () => {
    cy.url().should("include", "/dashboard");
    cy.get(`[data-cy="userMenuDrop"]`).click();
    cy.contains("View Profile");
    cy.contains("Log Out");
    cy.get(`[data-cy="userView"]`).click();
    cy.contains("Name:");
    cy.contains("Ash Ketchum");
    cy.contains("Email:");
    cy.contains("ashketchum@pokedex.com");
    cy.contains("Profession:");
    cy.contains("Pokemon Master");
    cy.contains("Description:");
    cy.contains("I wanna be the very best...");
  });
});
