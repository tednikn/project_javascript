describe('Test project', function () {

    before(function () {
        cy.log('Enter the testing website');
        cy.visit("https://www.foxstone.ch")
    });

    beforeEach(function () {
        // nothing to describe
    });

    afterEach(function () {
        // nothing to describe
    });

    it('Signup page should be load', function () {
        cy.log('Initial page should be displayed');
        cy.contains('L’investissement immobilier pour tous!');
        cy.get('.menu-toggle').click();
        cy.get('.buttons .btn').first().click();
        cy.url().should('include', '/signup');
    });
});