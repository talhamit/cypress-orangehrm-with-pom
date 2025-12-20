import menuSearch from '../../pages/search';
import dashBoardPage from '../../pages/DashBoardPage';

const sideM = new menuSearch();
const dashboardP = new dashBoardPage();

describe('Search Bar Test',()=>{
    
    beforeEach(()=>{

        cy.loginSession();
        dashboardP.dashVisit();

    })

    it('Verify search bar is visible',()=>{

        sideM.searchBar().should('be.visible').and('be.enabled');

    })

    it('Search with valid keyword',()=>{

        sideM.searchBar().type('admin');
        sideM.searchItemResult().should('contains.text','Admin')

    })

    it('Search With Invalid Keyword',()=>{

        sideM.searchBar().type('xyz');
        sideM.searchItemResult().should('have.length', 0);

    })

    it('Search with empty input',()=>{

        sideM.searchBar().clear();
        sideM.searchItemResult().should('be.visible');

    })

})