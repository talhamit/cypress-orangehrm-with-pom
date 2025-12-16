class ForgetPasswordPage{


 usernameInput() {
    return cy.get('input[placeholder="Username"]');
  }

  resetButton() {
    return cy.get('button[type="submit"]');
  }

  cancelButton(){
    return cy.get('button[type="button"]').should('have.text',' Cancel ');
  }

  successMessage() {
    return cy.get('.orangehrm-card-container');
  }



}

export default ForgetPasswordPage;
