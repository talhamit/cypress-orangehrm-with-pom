class menuSearch {


    searchBar(){
    
        return  cy.get('input.oxd-input.oxd-input--active');

    }

    searchInput(){

        return cy.get('input.oxd-input.oxd-input--active');
    }

    searchItemResult(){

        return   cy.get('.oxd-main-menu-item--name')

    }

}

export default menuSearch;