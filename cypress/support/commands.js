Cypress.Commands.add("access", () => {
    cy.visit('https://www.jaguarlandrover.com/')
})

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test

    return false
})
