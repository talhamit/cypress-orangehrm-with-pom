import sideMenu from '../../pages/sideMenu';
import dashBoardPage from '../../pages/DashBoardPage';


const SideM = new sideMenu();
const DashP = new dashBoardPage();

describe('Side Menu Test',()=>{


    beforeEach(()=>{

           cy.loginSession();

        DashP.dashVisit();

    })

    it('Verify Side Menu Items Visibility',()=>{
        SideM.getMenuItems().each((item)=>{
            cy.wrap(item).should('be.visible');
        })

    })

    it.only('Verify sidebar items are clickable',()=>{

        SideM.getMenuItemsLinks().each((item)=>{
            cy.wrap(item).should('have.attr','href');
        })

    })

})