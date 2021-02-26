Cypress.Commands.add("login", (username, password) => {
    cy.get('.menu-toggle').click();
    cy.get('.buttons .btn').first().click();
});

describe('Test project', function () {
    let value = '/signup';

    before(function () {
    });

    beforeEach(function () {
        cy.log('Enter the testing website');
        cy.visit("https://www.foxstone.ch")
    });

    after(function () {
    });

    it('Signup page should be load', function () {
        cy.log('Initial page should be displayed');
        cy.contains('L’investissement immobilier pour tous!');
        cy.login("username", "password");
        cy.url().should('include', value);
    });

    it('Signup page should be load', function () {
        cy.log('Initial page should be displayed');
        cy.contains('L’investissement immobilier pour tous!');
        cy.login("username", "password");
        cy.url().should('include', '/eee');
    });
});