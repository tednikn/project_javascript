import { MailSlurp } from "mailslurp-client"

const mailslurp = new MailSlurp({ apiKey: 'e55017677291d138fc62869c4e2bb32199618a8d5a9f28665f5d707a3a46afeb' });

Cypress.Commands.add("login", (username, password) => {
    cy.get('.menu-toggle').click();
    cy.get('.buttons .btn').first().click();
});

Cypress.Commands.add("evalue", async (id) => {
    const value = "c18b38d3-8103-4a80-8f6c-7eb688ed9926";

});

Cypress.Commands.add("eval", async () => {
    const fs = require('fs');
    return fs.readFileSync("C:\\test\\git\\LICENSE.txt");
});

describe('Test project', function () {
    before(function () {
        cy.log('Enter the testing website');
        cy.visit("https://www.foxstone.ch")
    });

    beforeEach(function () {
        // nothing to describe
    });

    afterEach(function () {
        cy.task('reporting');
    });

    it('Signup page should be load', function () {
        cy.log('Initial page should be displayed');
        cy.contains('L’investissement immobilier pour tous!');
        cy.login("username", "password");
        cy.url().should('include', '/signup');
    });
});