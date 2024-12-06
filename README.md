# retool-docker-compose

This is just a plain local instance that you can clone in order to add Cypress. Prior to running Cypress, verify that you can run this instance on local host. 

# Cypress Setup and Login Test Guide

1. create a directory called `tests` in root:
    `mkdir tests`

1. cd into the `tests` directory:
  `cd tests`
   
3. run npm init (you can select ok for all of the default settings)

4. install Cypress in the tests directory

   - npm install cypress --save-dev

5. extend Cypress with custom commands from the testing library ecosystem

   - npm install --save-dev @testing-library/cypress

6. start your local instance from the root directory

   - docker compose up -d

7. start Cypress from the tests directory

   - npx cypress open

8. You should see your browser open. Follow the prompt to install any configuration files. 

9. Follow the prompt to create your first spec.

10. Take a look at the test created in user/cypress/e2e/spec.cy.js in your IDE

11. Replace lines 1-5 with the following code and save: 

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

    ​    cy.login("username", "password"); // Replace with actual username and password

    ​    cy.url().should('eq', "http://localhost:3000/auth/login");

      });

    });

12. Run the new test, and if everything is configured correctly, it should log you into your local instance.
        - npx cypress run --browser chrome
