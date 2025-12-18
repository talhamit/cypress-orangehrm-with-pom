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

import LoginPage from "../pages/LoginPage";

const login_page = new LoginPage();

Cypress.Commands.add('loginSession',()=>{

    cy.session('orangeHrmSession',()=>{
        login_page.visit();
        login_page.login('Admin','admin123');
        cy.url().should('include','/dashboard');
    },
    {
      validate() {
        cy.url().should('include', '/dashboard');
        cy.getCookie('orangehrm').should('exist');
      }
    });
})

Cypress.Commands.add('apiLoginSession',()=>{

        cy.session('OrangeApiLogin',()=>{
          cy.request({
            method:'POST',
            url: '/api/auth/login',
            body: {username:'Admin',password:'admin123'}
          }).then((resp)=>{
            expect(resp.status).to.eq(200);
            // Save token in localStorage for app use
            window.localStorage.setItem('token', resp.body.token);
          })
        })

})