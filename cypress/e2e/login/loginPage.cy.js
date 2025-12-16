
import LoginPage from '../../pages/LoginPage';

describe('Login Test', () =>{

    const loginP = new LoginPage();

    beforeEach(() =>{
               
        loginP.visit();

    })

    //Verify login page title
    it('Check Title', () => {

        loginP.loginTitle().should('be.visible');

    })

    //Verify Login with Valid Credentials
    it('Login With Valid Credentials', () =>{

        loginP.login('Admin','admin123');
        cy.contains("Dashboard").should('be.visible');

    })

    it('Validate Empty Username & Password', ()=> {

        loginP.SubmitBtn();
        loginP.usernameError().should('have.text','Required');
        loginP.passwordError().should('have.text',"Required");
             
    })

    it('Validate Valid username & Empty password', ()=>{

        loginP.EnterUserName('Admin');
        loginP.SubmitBtn();
        loginP.passwordError().should('have.text','Required')

    })

    it('Invalid Username & Empty Password', () =>{

        loginP.EnterUserName('adminadmin');
        loginP.SubmitBtn();
        loginP.passwordError().should('have.text','Required');

    })

    it('Invalid Username & valid Password', ()=>{

        loginP.EnterUserName('adminadmin');
        loginP.EnterPassword('admin123');
        loginP.SubmitBtn();
        loginP.alertErrorMessage().should('have.text','Invalid credentials');

    })

    it('Verify Valid username & invalid password', () =>{
        loginP.EnterUserName('Admin');
        loginP.EnterPassword('asdfgh');
        loginP.SubmitBtn();
        loginP.alertErrorMessage().should('have.text','Invalid credentials');
    })

    it('Verify inValid username & invalid password', () =>{

        loginP.EnterUserName('adminadmin');
        loginP.EnterPassword('abcdef');
        loginP.SubmitBtn();
        loginP.alertErrorMessage().should('have.text','Invalid credentials');

    })

    it('Verify Empty username & valid password', ()=>{

        loginP.EnterPassword('admin123');
        loginP.SubmitBtn();
        loginP.usernameError().contains('Required');

    })

    it("Verify Empty username invalid password",()=>{

        loginP.EnterPassword('adminadmin');
        loginP.SubmitBtn();
        loginP.usernameError().contains('Required');

    })

    it('Verify Forget Password link', ()=>{

        loginP.forgotPasswordLink().should('be.visible').and('contains.text','Forgot your password')

    })

    it('Verify Forget Password link click',()=>{

        loginP.clickForgotPassword();
        cy.url().should('include','/auth/requestPasswordResetCode')

    })

    it('Verify Social Media icon links',()=>{

         const socialLinks = [
            'linkedin.com',
            'facebook.com',
            'twitter.com',
            'youtube.com' ];
        
            // use .should() twice ...
        cy.get('.orangehrm-login-footer-sm a')
            .should('have.length',socialLinks.length)
            .each(($el,index)=>{
                cy.wrap($el)
            .should('have.attr','href')
            .and('contain',socialLinks[index])
        })

        
   
    })

    it.only('Verify OrangeHRM footer link',()=>{

        loginP.orangeHrmLink().should('have.attr','href').and('contain','orangehrm.com');
    })

})