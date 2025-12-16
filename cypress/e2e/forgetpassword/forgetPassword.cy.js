import LoginPage from "../../pages/LoginPage";
import ForgetPassword from '../../pages/ForgetPassword';
import ForgetPasswordPage from "../../pages/ForgetPassword";


const loginP = new LoginPage();
const forgetP = new ForgetPasswordPage();



describe('Forget Password Test',() =>{

    beforeEach(()=>{
        loginP.visit();
    })


    it('Verify Forget Password link', ()=>{
        
        loginP.forgotPasswordLink().should('be.visible').and('contains.text','Forgot your password');

    })

    it('Navigate to Forget Password Page', ()=>{

        loginP.clickForgotPassword();
        cy.url().should('include','/auth/requestPasswordResetCode');

    })

    it.only('Verify Cancel Button', ()=>{
        loginP.clickForgotPassword();
        forgetP.cancelButton().click();
    })

        


})