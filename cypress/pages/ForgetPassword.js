class ForgetPasswordPage{


 usernameInput(username) {
    return cy.get('input[placeholder="Username"]').type(username);
  }

  resetButton() {
    return cy.get('button[type="submit"]');
  }

  cancelButton(){
    return cy.get('button[type="button"]').should('have.text',' Cancel ');
  }

  resetPasswordtitle (){

    return cy.get('.orangehrm-forgot-password-title').contains('Reset Password link sent successfully');
  }

  


}

export default ForgetPasswordPage;
