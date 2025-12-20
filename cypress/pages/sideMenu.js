class sideMenu {

    getMenuItems(){
    return cy.get('span.oxd-main-menu-item--name');        
    }

    getMenuItemsLinks(){

        return cy.get('a.oxd-main-menu-item');
    }


}

export default sideMenu;