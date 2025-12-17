class dashBoardPage{

    dashVisit(){
        cy.visit('/dashboard/index');
    }

    navDropDown(){
      return  cy.get('.oxd-userdropdown');
    }

    
    navDropDownClick(){

      return  this.navDropDown()
                  .should('be.visible')
                  .click();
    }
    

    aboutLink(){

      return this.navDropDown().find('a.oxd-userdropdown-link').contains('About');       
    }

    aboutPageTitle(){

      return cy.get('.orangehrm-main-title');

    }

    supportLink (){

      return this.navDropDown().find('a.oxd-userdropdown-link').contains('Support');
    }

    changePassLink (){

      return this.navDropDown().find('a.oxd-userdropdown-link').contains('Change Password');
    }

    logoutLink(){

      return this.navDropDown().find('a.oxd-userdropdown-link').contains('Logout');

    }
    

}

export default dashBoardPage;