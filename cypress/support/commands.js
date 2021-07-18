// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
{
    Cypress.Commands.add("login", (email, password) => {
        cy.get('div[id="content"]').then(($body) => {
            if ($body) {
              cy.get('button[id="onesignal-slidedown-cancel-button"]').click()
            }
        })
        //type email
        cy.get('input[name="email"]')
        .type(email, {force:true})
        .should('have.value', email)
        //type password
        cy.get('input[name="password"]')
        .type(password, {force:true})
        //klik button masuk
        cy.xpath('//*[@id="content"]/div/div/div[2]/div/div[2]/div[4]/button/div/div/span')
        .click({force:true})
       
    })
}