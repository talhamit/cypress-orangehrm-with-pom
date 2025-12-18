class LoginPage{

    visit(){
        cy.visit('/auth/login'); 
       }

    EnterUserName (username){
        return cy.get('input[name="username"]').type(username);
    }       

    EnterPassword (passsword){
        return cy.get('input[name="password"]').type(passsword);
 
    }

    SubmitBtn (){
        return cy.get('button[type="submit"]').click();
    }

    loginTitle(){
        return cy.contains('.orangehrm-login-title', 'Login');
    }

    login(username,passsword){
        this.EnterUserName(username);
        this.EnterPassword(passsword)
        this.SubmitBtn();
    }

    usernameError(){
        return cy.get('input[name="username"]')
            .closest('.oxd-input-group')
            .find('.oxd-input-field-error-message');
    }

    passwordError (){
        return cy.get('input[name="password"]')
      .closest('.oxd-input-group')
      .find('.oxd-input-field-error-message');
    }


    
    alertErrorMessage(){
        return cy.get('.oxd-alert-content-text');
    }


    forgotPasswordLink() {
    return cy.get('.orangehrm-login-forgot');
    }

    clickForgotPassword() {
        this.forgotPasswordLink().click();
    }

    orangeHrmLink() {
    return cy.get('a[href*="orangehrm.com"]');
    }


}
export default LoginPage;
