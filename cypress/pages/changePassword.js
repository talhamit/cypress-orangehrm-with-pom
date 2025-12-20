class changePassword {

    passwordFields = 'input[type="password"]';
    
 

changePassVisit(){
    return cy.visit('/pim/updatePassword');
}

changePassPageTitle(){

    return cy.get('.orangehrm-main-title');

}

enterCurrenPassword(tp){

   return cy.get(this.passwordFields).eq(0).type(tp);

}

enterNewPassword(tp){

  return  cy.get(this.passwordFields).eq(1).type(tp);

}

enterConfirmPassword(tp){

    return    cy.get(this.passwordFields).eq(2).type(tp);

}

saveBtnClick(){

    return    cy.contains('button.oxd-button--secondary[type="submit"]','Save').click();

}

currentPassErrorMsg(){
   return cy.get(this.passwordFields).eq(0).parents('.oxd-input-group').find('.oxd-input-field-error-message');
    
}

newPassErrorMsg(){

   return cy.get(this.passwordFields).eq(1).parents('.oxd-input-group').find('.oxd-input-field-error-message');

}

confPassErrorMsg(){

    return cy.get(this.passwordFields).eq(2).parents('.oxd-input-group').find('.oxd-input-field-error-message');

}



}

export default changePassword;