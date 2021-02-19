Cypress.Commands.add("login", (username, password) => {
    cy.get('.menu-toggle').click();
    cy.get('.buttons .btn').first().click();
});

describe('Test project', function () {
    before(function () {
        cy.log('Enter the testing website');
        cy.visit("https://www.foxstone.ch")
    });

    beforeEach(function () {
    });

    after(function () {
    });

    it('Signup page should be load', function () {
        cy.log('Initial page should be displayed');
        cy.contains('L’investissement immobilier pour tous!');
        cy.login("username", "password");
        cy.url().should('include', '/signup');
    });

    it('Signup page should be load', function () {
        cy.log('Initial page should be displayed');
        cy.contains('L’investissement immobilier pour tous!');
        cy.login("username", "password");
        cy.url().should('include', '/eee');
    });
});