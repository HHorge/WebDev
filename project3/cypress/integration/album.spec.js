///<reference types="cypress" />

describe('Album_database', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/');
        cy.fixture("/search").as("search");
    })

   /* it("Successfully loads", function(){
        cy.request('http://localhost:5000/albums')
    })*/

    it('successfully loads', function() {
        cy.visit('/')
      })

    it('has a title', () => {
        cy.contains('Music Album Database');
    })

    it('blocks protected routes', () => {
        cy.get('label[for="option"]').should('not.visible');
        cy.get('input[id="checkIt"').click();
        cy.get('label[for="option"]').should('visible');

    })

    it('successfully loads album from database', function(){
        cy.get(".resultList").contains(this.search.album);
    })

    it("gives correct search", function(){
        cy.get('input[name="search"]').type(this.search.search)
        .should("have.value", this.search.search);
        cy.get(".resultList").contains(this.search.search);
    })

    it('gives correct albums from category', function(){
        cy.get('input[id="checkIt"').click();
        cy.get('label[for="option"]').click();
        cy.get('.resultList').contains(this.search.category);
    })
   
    it('successfully loads details', function(){
        cy.visit('/details').contains(this.search.details);
    })

})