import LoginPage from "../../pages/LoginPage";
import dashBoardPage from "../../pages/DashBoardPage";
import changePassword from "../../pages/changePassword";

const loginP = new LoginPage();
const dashboardP = new dashBoardPage();
const changeP = new changePassword();


describe('Update Password Test',()=>{

    beforeEach(()=>{

        cy.loginSession();
        changeP.changePassVisit();
    })

    it('Verify Change password Page',()=>{
      
       changeP.changePassPageTitle().should('be.visible').and('have.text','Update Password');

    })

    it('Verify All Empty Field Error message', ()=>{

        changeP.saveBtnClick();
        changeP.currentPassErrorMsg().should('be.visible').and('have.text','Required');
        changeP.newPassErrorMsg().should('be.visible').and('have.text','Required');
        changeP.confPassErrorMsg().should('be.visible').and('have.text','Passwords do not match');
    })

    it('Verify new password field character limit message', ()=>{

        changeP.enterNewPassword('abc123');
        changeP.newPassErrorMsg().should('be.visible').and('have.text', 'Should have at least 7 characters');
    
    })

    it('Verify Empty current password field Error message remaining valid data',()=>{

        changeP.enterNewPassword('abcdef123');
        changeP.enterConfirmPassword('abcdef123');
        changeP.saveBtnClick();
        changeP.currentPassErrorMsg().should('be.visible').and('have.text','Required');

    })

    it('Verify new Password error message "password must contain minimum 1 lower-case letter"',()=>{

        changeP.enterNewPassword('1234567');
        changeP.newPassErrorMsg().should('be.visible').and('have.text','Your password must contain minimum 1 lower-case letter');

    })


    

})