import "@testing-library/cypress/add-commands";

Cypress.session.clearAllSavedSessions();

Cypress.Commands.add("login", (username, password) => {
  cy.visit("http://localhost:3000/auth/login"); // Adjust this to your local app's login URL
  cy.get('input[placeholder="name@company.com"]').type(username); // Adjust the placeholder to match your username field
  cy.get('input[placeholder="Password"]').type(password); // Adjust the placeholder to match your password field
  cy.contains(/^Sign in$/).click(); // Click the Sign in button
});

describe('Login Test', () => {
  it('should log in successfully and navigate to the home page', () => {
    cy.login("lynn@retool.com", "Charlie123!!"); // Replace with actual username and password
    cy.url().should('eq', "http://localhost:3000/auth/login");
  });
});