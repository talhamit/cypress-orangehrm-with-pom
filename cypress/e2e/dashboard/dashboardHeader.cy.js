import dashBoardPage from '../../pages/DashBoardPage';
import LoginPage from '../../pages/LoginPage';


const dashboardP = new dashBoardPage();


/* =========================
    Dashboard Header Test
========================= */

describe('Dashboard Header', () =>{

    beforeEach(()=>{

        cy.loginSession();
        dashboardP.dashVisit();
        
    })

    it("Verify Dashboard", ()=>{
        
        cy.contains("Dashboard").should("be.visible");

    })

    it('Verify nav Dropdown', ()=>{

        dashboardP.navDropDownClick().should('have.class','--active');

    })

    it('Verify About link',()=>{

        dashboardP.navDropDownClick();
        dashboardP.aboutLink().click();
        dashboardP.aboutPageTitle().should('be.visible').and('have.text','About');

    })

    it('Verify Support Link',()=>{

        dashboardP.navDropDownClick();
        dashboardP.supportLink().click();
        cy.url().should('include','/help/support');
        cy.contains('Customer Support').should('be.visible');

    })

    it('Verify Change Password link',()=>{

        dashboardP.navDropDownClick();
        dashboardP.changePassLink().click();
        cy.url().should('include','/pim/updatePassword');   

    })

});


/* =========================
        Logout Test
========================= */

describe('Logout', () => {

    before(() => {
        cy.loginSession();
        dashboardP.dashVisit();
    });

    it('Verify Logout Link', () => {
        dashboardP.navDropDownClick();
        dashboardP.logoutLink().click();
        cy.url().should('include','/auth/login');
    });

});