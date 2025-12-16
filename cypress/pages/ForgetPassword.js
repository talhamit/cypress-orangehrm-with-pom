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

  


}

export default ForgetPasswordPage;
