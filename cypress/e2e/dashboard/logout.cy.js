import dashBoardPage from '../../pages/DashBoardPage';
import LoginPage from '../../pages/LoginPage';


const dashboardP = new dashBoardPage();

describe('Logout Tests', ()=>{

  beforeEach(()=>{
    cy.loginSession();   // session based login
    dashboardP.dashVisit()
    //.contains('Dashboard').should('be.visible');
   
  });

  it.only('Verify user can logout successfully', ()=>{

    dashboardP.navDropDownClick();
    dashboardP.logoutLink().click();

    // User redirected to login page
    cy.url().should('include','/auth/login');

    // Login page visible
    cy.contains('Login').should('be.visible');

  });

  // after(() => {
  //   Cypress.session.clearAllSavedSessions();
  // });

    after(() => {
  cy.clearCookies();
  cy.clearLocalStorage();
});


  it('Verify session is cleared after logout', ()=>{

    dashboardP.navDropDownClick();
    dashboardP.logoutLink().click();

    // Try to access dashboard directly
    cy.visit('/dashboard');

    // Should redirect to login
    cy.url().should('include','/auth/login');
  });

});
